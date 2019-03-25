class MedicosDao{
  constructor(db) {
      this._db = db;
  }

  lista(){
    return new Promise((resolve, reject) => {
      let query_listagem = "select m.nome as nome, esp.nome as especialidade from medico m"
           + " left join medico_especialidade me on me.medico_id = m.id"
           + " left join especialidade esp on me.especialidade_id = esp.id";

      this._db.query(query_listagem,(erro, resultados) => {
        if(erro) return reject("Não foi possivel listar os medicos.")
        return resolve(resultados)
      });

    });

  }

  adiciona(medico){
    return new Promise((resolve, reject) =>{
      var id_medico;
      this._db.query("insert into medico (id, nome, data_nascimento) values (?,?,?)",
        [
          null,
          medico.nome,
          medico.data,
        ],
        (erro) => {
          if(erro) {
            console.log(erro);
            return reject("Falha ao cadastrar o médico");
          }
        }

      )
      this._db.query("select id from medico where nome = '" + medico.nome + "'", (erro, resultado) => {
        if(erro) console.log(erro);
        id_medico = resultado[0].id;
        this._db.query("insert into contato (id, endereco, telefone, medico_id) values (?,?,?,?)",
        [
          null,
          medico.endereco,
          medico.telefone,
          id_medico
        ],
        (erro) => {
          if(erro) {
            console.log(erro);
            return reject("Falha ao inserir o Contato");
          }
        }
      );
      for(let i = 0; i < medico.especialidades.length; i++){
        this._db.query("insert into medico_especialidade (medico_id, especialidade_id) values (?,?)",
          [
            id_medico,
            medico.especialidades[i]
          ],
          (erro) => {
            if(erro) {
              console.log(erro);
              return reject("Falha ao cadastrar a especialidade");
            }
          }
        );
      }
      if(medico.enfase){
        for(let i = 0; i < medico.enfase.length; i++){
          this._db.query("insert into medico_enfase(medico_id, enfase_id) values (?,?)",
            [
              id_medico,
              medico.enfase[i]
            ],
            (erro) => {
              if(erro) {
                console.log(erro);
                return reject("Falha ao cadastrar a enfase");
              }
            }
          );
        }
      }
      return resolve();
    });


    });
  }

}

// MedicoDAO.prototype.salva = function(medico, callback){
//     this._connection.query('insert into medico set ?', medico, callback);
// }
// MedicoDAO.prototype.salvaEspecialidades = function(array, callback){
//     this._connection.query('insert into medico_especialidade(medico_id, especialidade_id) VALUES ?', [array], callback);
// }
// MedicoDAO.prototype.salvaContato = function(medico_id, tel, endereco, callback){
//     this._connection.query('insert into contato set ?', {medico_id: medico_id, endereco: endereco, telefone: tel}, callback);
// }
// MedicoDAO.prototype.salvaEnfases= function(array, callback){
//     this._connection.query('insert into medico_enfase(medico_id, enfase_id) values ?', [array], callback);
// }
// MedicoDAO.prototype.deletar= function(medico_id, callback){
//     this._connection.query('delete from medico where id = ?',[medico_id], callback);
// }
module.exports = MedicosDao;
