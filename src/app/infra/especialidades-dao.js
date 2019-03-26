class EspecialidadesDao{
  constructor(db){
    this._db = db;
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
  listaEspecialidadeEEnfase(){
      return new Promise((resolve, reject) => {
        let query_especialidades = `
          select esp.id, esp.nome as especialidade,enf.id as enfase_id, enf.nome as enfase, enf.especialidade_id from especialidade esp left join enfase enf on enf.especialidade_id = esp.id
        `;
        this._db.query(query_especialidades,(erro, resultados) => {
          if(erro) return reject(erro);
          let vetorObjeto = [];
          vetorObjeto.push({
            'especialidade': resultados[0].especialidade,
            'id': resultados[0].id,
            'enfases':[
              {
                'nome': resultados[0].enfase,
                'id': resultados[0].enfase_id,
                'especialidade_id': resultados[0].especialidade_id
              }
            ]
          });
          for(let i = 1; i < resultados.length; i++){
            if(vetorObjeto[vetorObjeto.length-1].id == resultados[i].id){
              vetorObjeto[vetorObjeto.length-1].enfases.push({
                'nome': resultados[i].enfase,
                'id': resultados[i].enfase_id,
                'especialidade_id': resultados[i].especialidade_id
              });
            }else{
              vetorObjeto.push({
                'especialidade': resultados[i].especialidade,
                'id': resultados[i].id,
                'enfases':[
                  {
                    'nome': resultados[i].enfase,
                    'id': resultados[i].enfase_id,
                    'especialidade_id': resultados[i].especialidade_id
                  }
                ]
              });
            }
          }

          return resolve(vetorObjeto);
        });



    });

  }
}
module.exports = EspecialidadesDao;
