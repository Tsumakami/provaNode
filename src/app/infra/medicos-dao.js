class MedicosDao{
  constructor(db) {
      this._db = db;
  }

  lista(callback){
    return new Promise((resolve, reject) => {
      let query_listagem = "select m.nome as nome, esp.nome as especialidade, enf.nome as enfase from medico m"
           + " join medico_especialidade me on me.medico_id = m.id"
           + " join especialidade esp on me.especialidade_id = esp.id"
           + " join medico_enfase menf on menf.medico_id = m.id"
           + " join enfase enf on enf.id = menf.enfase_id";
      this._db.query(query_listagem,(erro, resultados) => {
        if(erro) return reject("Não foi possivel listar os medicos.")
        return resolve(resultados)
      });

    });

  }

}

module.exports = MedicosDao;
