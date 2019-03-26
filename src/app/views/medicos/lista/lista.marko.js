// Compiled using marko@4.16.3 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/provanodejs$1.0.0/src/app/views/medicos/lista/lista.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_attr = marko_helpers.a,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><link rel=\"stylesheet\" type=\"text/css\" href=\"/estatico/css/bootstrap.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<h1>Lista de Médicos</h1><table class=\"table\" id=\"medico\"><thead><tr><th scope=\"col\">Id</th><th scope=\"col\">Nome</th><th scope=\"col\">Especialidade</th></tr></thead><tbody>");

  var for__12 = 0;

  marko_forEach(data.medicos, function(medico) {
    var keyscope__13 = "[" + ((for__12++) + "]");

    out.w("<tr" +
      marko_attr("id", "medico_" + medico.id) +
      "><td>" +
      marko_escapeXml(medico.id) +
      "</td><th scope=\"row\">" +
      marko_escapeXml(medico.nome) +
      "</th><td>" +
      marko_escapeXml(medico.especialidade) +
      "</td><td><a" +
      marko_attr("href", "/medicos/form/" + medico.id) +
      ">Editar</a></td><td><a href=\"#\"" +
      marko_attr("data-ref", "" + medico.id) +
      " data-type=\"remocao\">Excluir</a></td></tr>");
  });

  out.w("</tbody></table><button type=\"button\" class=\"btn btn-primary\"><a style=\"color: white\" href=\"/medicos/form\">Novo Médico</a></button><script src=\"/estatico/js/remove-medico.js\">\n</script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "25");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/provanodejs$1.0.0/src/app/views/medicos/lista/lista.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/core/await/reorderer-renderer"
    ]
  };
