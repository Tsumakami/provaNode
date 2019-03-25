const EspecialidadesDao = require("../infra/especialidades-dao");
const MedicosDao = require("../infra/medicos-dao");
const db = require('../../config/config-mysql');

module.exports = (app) => {
  app.get('/listagem', function(req, resp){
    const medicosDao = new MedicosDao(db);
    medicosDao.lista()
      .then(medicos => resp.marko(
          require('../views/medicos/lista/lista.marko'),
          {
            medicos : medicos
          }
      ))
      .catch(erro => console.log(erro));
  });


  app.get('/medicos/form', function(req, resp){
    const especialidadesDao = new EspecialidadesDao(db);
    let vetor = [];
    especialidadesDao.lista()
      .then(especialidades => {
            vetor.push({
                'especialidade': especialidades[0].especialidade,
                'id': especialidades[0].id,
                'enfases':[
                    {
                        'nome': especialidades[0].enfase,
                        'id': especialidades[0].enfase_id,
                        'especialidade_id': especialidades[0].especialidade_id
                    }
                ]
            });


        for(let i = 1; i < especialidades.length; i++){
          if(vetor[vetor.length-1].id == especialidades[i].id){
                    vetor[vetor.length-1].enfases.push({
                        'nome': especialidades[i].enfase,
                        'id': especialidades[i].enfase_id,
                        'especialidade_id': especialidades[i].especialidade_id
                    });
                }else{
                    vetor.push({
                        'especialidade': especialidades[i].especialidade,
                        'id': especialidades[i].id,
                        'enfases':[
                            {
                                'nome': especialidades[i].enfase,
                                'id': especialidades[i].enfase_id,
                                'especialidade_id': especialidades[i].especialidade_id
                            }
                        ]
                    });
                }
        }

        resp.marko(require('../views/medicos/form/form.marko'),
        {
            especialidades: vetor
        }
      );
        console.log(vetor);
    })
      .catch(erro => console.log(erro));
  });
  app.post("/medicos", function(req, resp){
    console.log(req.body);
    const medicosDao = new MedicosDao(db);
    // medicosDao.adiciona(req.body)
    //   .then()
    //   .catch(erro => console.log(erro));
  })


}