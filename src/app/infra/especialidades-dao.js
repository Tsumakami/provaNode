class EspecialidadesDao{
  constructor(db){
    this._db = db;
  }

  lista(){
    return new Promise((resolve, reject) => {
      let query_especialidades = `
        select esp.id, esp.nome as especialidade,enf.id as enfase_id, enf.nome as enfase, enf.especialidade_id from especialidade esp left join enfase enf on enf.especialidade_id = esp.id;
        `
      this._db.query(query_especialidades,(erro, resultados) => {
        if(erro) return reject("Não foi possivel listar as especialidades.");

        return resolve(resultados);
      });
    });
  }
  listaEnfase(esp_id){
    return new Promise((resolve, reject) => {
      this._db.query("select enf.especialidade_id, enf.nome as enfase from enfase enf ",
       (erro, result) => {
         if(erro) return reject(erro);
        return resolve(result);
       }
     );
    });
  }

  
}
module.exports = EspecialidadesDao;
