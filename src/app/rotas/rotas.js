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
    especialidadesDao.listaEspecialidadeEEnfase()
      .then(
        especialidades => {
          obj_vazio = {
            'id': null,
            'nome': '',
            'data_nascimento': null,
            'endereco': '',
            'telefone': '',
            'especialidade_id': null,
            'especialidade': '',
            'enfase_id': null,
            'enfase': ''
          };
          console.log(especialidades);
          resp.marko(require('../views/medicos/form/form.marko'),
            {
              medico:obj_vazio,
              especialidades:especialidades
            }
          );
        }

      )
      .catch(erro => console.log(erro));
  });

  app.post("/medicos", function(req, resp){
    console.log(req.body);
    const medicosDao = new MedicosDao(db);
    medicosDao.adiciona(req.body)
    .then(
      setTimeout(function(){ resp.redirect("/listagem") }, 500)

    )
    .catch(erro => console.log(erro));
  });

  app.get('/medicos/form/:id', function(req, resp){
    const id = req.params.id;
    const medicosDao = new MedicosDao(db);
    const especialidadesDao = new EspecialidadesDao(db);
    medicosDao.buscarMedicoPorId(id)
      .then(
        (medico) => {
          resp.marko(require('../views/medicos/form/form.marko'),{
            medico:medico[0]
          });

        }
      )
      .catch(erro => console.log(erro));
  });

  app.delete("/medicos/:id", function(req, resp){
    const id = req.params.id;
    const medicosDao = new MedicosDao(db);
    medicosDao.remove(id)
    .then(
      () => resp.status(200).end()

    )
    .catch(erro => console.log(erro));
  });

  app.put("/medicos", function(req, resp){
    const medicosDao = new MedicosDao(db);
    console.log(req.body);
    medicosDao.atualiza(req.body)
    .then(
      setTimeout(function(){ resp.redirect("/listagem") }, 500)

    )
    .catch(erro => console.log(erro));
  });

  app.get("/login", function(req, resp){
    resp.marko(require('../views/login/login.marko'))
  });

}
