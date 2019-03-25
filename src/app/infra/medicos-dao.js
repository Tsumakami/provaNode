class MedicosDao{
  constructor(db) {
      this._db = db;
  }

  lista(){
    return new Promise((resolve, reject) => {
      let query_listagem = "select m.id, m.nome as nome, esp.nome as especialidade from medico m"
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
  atualiza(medico){

  }
  remove(id){
    return new Promise((resolve, reject) => {
      this._db.query("delete from medico where id = "+21,(erro, resultados) => {
        if(erro) return reject("Não foi possivel remover o medicos.")
        return resolve(resultados)
      });

    });
  }

}


module.exports = MedicosDao;
