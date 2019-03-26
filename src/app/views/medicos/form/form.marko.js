// Compiled using marko@4.16.3 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/provanodejs$1.0.0/src/app/views/medicos/form/form.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_escapeXml = marko_helpers.x,
    marko_attr = marko_helpers.a,
    marko_forEach = marko_helpers.f,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><title>Cadastro</title><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><link rel=\"stylesheet\" type=\"text/css\" href=\"/estatico/css/main.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"/estatico/css/bootstrap.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<h1>cadastro de Médicos</h1><div class=\"container\"><form action=\"/medicos\" method=\"post\"><div class=\"row\"><a href=\"/listagem\">Voltar a listagem</a></div><div class=\"row\"><h3>Dados pessoais</h3></div><p>" +
    marko_escapeXml(data.medico.id != null) +
    "</p>");

  if (data.medico.id != null) {
    out.w("<input type=\"hidden\" name=\"id\" id=\"id\"" +
      marko_attr("value", "" + data.medico.id) +
      "><input type=\"hidden\" name=\"_method\" value=\"PUT\">");
  }

  out.w("<div class=\"row\"><div class=\"col-md-4\"><label for=\"nome\">Nome</label><input type=\"text\" class=\"form-control\"" +
    marko_attr("value", "" + data.medico.nome) +
    " name=\"nome\"></div><div class=\"col-md-4\"><label for=\"crm\">CRM</label><input type=\"text\" class=\"form-control\" value=\"\" name=\"crm\"></div><div class=\"col-md-4\"><label for=\"data\">Data de Nascimento</label><input type=\"date\" class=\"form-control\"" +
    marko_attr("value", "" + data.medico.data_nascimento) +
    " name=\"data\"></div></div><div id=\"contato\"><div class=\"row\"><h3>Dados para Contato</h3></div><div class=\"row\"><div class=\"col-md-4\"><label for=\"endereco\">Endereco</label><input type=\"text\" class=\"form-control\"" +
    marko_attr("value", "" + data.medico.endereco) +
    " name=\"endereco\"></div><div class=\"col-md-4\"><label for=\"telefone\">Telefone</label><input type=\"tel\" class=\"form-control\"" +
    marko_attr("value", "" + data.medico.telefone) +
    " name=\"telefone\"></div></div></div><button type=\"button\" class=\"btn btn-success\" id=\"add-endereco\">Adicionar outro endereco</button><div class=\"row\"><h3>Especialidades e Patologias</h3></div>");

  var for__42 = 0;

  marko_forEach(data.especialidades, function(especialidade) {
    var keyscope__43 = "[" + ((for__42++) + "]");

    out.w("<div class=\"row\"><div class=\"col-md-12 especialidade\"><input type=\"checkbox\" name=\"especialidades\"" +
      marko_attr("value", "" + especialidade.id) +
      "> " +
      marko_escapeXml(especialidade.especialidade) +
      "</div>");

    var for__47 = 0;

    marko_forEach(especialidade.enfases, function(enfase) {
      var keyscope__48 = "[" + (((for__47++) + keyscope__43) + "]");

      if (enfase.id != null) {
        out.w("<div class=\"col-md-10 patologia hidden\"><input type=\"checkbox\" name=\"enfase\"" +
          marko_attr("value", "" + enfase.id) +
          "> " +
          marko_escapeXml(enfase.nome) +
          "</div>");
      }
    });

    out.w("</div>");
  });

  out.w("<script id=\"template-novo-endereco\" type=\"text/template\">\n                <div class=\"row\">\n                    <div class=\"col-md-4\">\n                        <label for=\"endereco\">Endereco</label>\n                        <input type=\"text\" class=\"form-control\" name={{endereco-name}} >\n                    </div>\n                    <div class=\"col-md-4\">\n                        <label for=\"telefone\">Telefone</label>\n                        <input type=\"tel\" class=\"form-control\" name={{telefone-name}} >\n                    </div>\n                    <div class=\"col-md-3\">\n                        <button type=\"button\" class=\"btn btn-danger\" id=\"remover-endereco\">Deletar este dado para contato</button>\n                    </div>\n                </div>\n            </script><script src=\"/estatico/js/main.js\"></script><input type=\"submit\" value=\"cadastrar\"></form></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "54");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/provanodejs$1.0.0/src/app/views/medicos/form/form.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/core/await/reorderer-renderer"
    ]
  };
