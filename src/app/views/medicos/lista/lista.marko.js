// Compiled using marko@4.16.3 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/provanodejs$1.0.0/src/app/views/medicos/lista/lista.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<table class=\"table\"><thead><tr><th scope=\"col\">Nome</th><th scope=\"col\">Especialidade 1</th><th scope=\"col\">Especialidade 2</th></tr></thead><tbody>");

  var for__7 = 0;

  marko_forEach(data.medicos, function(medico) {
    var keyscope__8 = "[" + ((for__7++) + "]");

    out.w("<tr><th scope=\"row\">" +
      marko_escapeXml(medico.nome) +
      "</th><td>" +
      marko_escapeXml(medico.especialidade) +
      "</td><td>" +
      marko_escapeXml(medico.enfase) +
      "</td></tr>");
  });

  out.w("</tbody></table>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/provanodejs$1.0.0/src/app/views/medicos/lista/lista.marko"
  };
