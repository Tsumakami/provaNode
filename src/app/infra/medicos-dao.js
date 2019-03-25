class MedicosDao{
  constructor(db) {
      this._db = db;
  }

  lista(){
    return new Promise((resolve, reject) => {
      let query_listagem = "select m.nome as nome, esp.nome as especialidade from medico m"
           + " join medico_especialidade me on me.medico_id = m.id"
           + " join especialidade esp on me.especialidade_id = esp.id";

      this._db.query(query_listagem,(erro, resultados) => {
        if(erro) return reject("Não foi possivel listar os medicos.")
        return resolve(resultados)
      });

    });

  }

  adiciona(){
    return new Promise((resolve, reject) =>{




      this._db.query();
    });
  }

}

module.exports = MedicosDao;
