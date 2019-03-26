// Compiled using marko@4.16.3 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/provanodejs$1.0.0/src/app/views/login/login.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!doctype html><html lang=\"en\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\"><meta name=\"description\" content=\"\"><meta name=\"author\" content=\"Mark Otto, Jacob Thornton, and Bootstrap contributors\"><meta name=\"generator\" content=\"Jekyll v3.8.5\"><title>Central de Bem Estar</title><link rel=\"canonical\" href=\"https://getbootstrap.com/docs/4.3/examples/sign-in/\"><link href=\"/estatico/css/bootstrap.min.css\" rel=\"stylesheet\"><style>\r\n      .bd-placeholder-img {\r\n        font-size: 1.125rem;\r\n        text-anchor: middle;\r\n        -webkit-user-select: none;\r\n        -moz-user-select: none;\r\n        -ms-user-select: none;\r\n        user-select: none;\r\n      }\r\n\r\n      @media (min-width: 768px) {\r\n        .bd-placeholder-img-lg {\r\n          font-size: 3.5rem;\r\n        }\r\n      }\r\n    </style><link href=\"signin.css\" rel=\"stylesheet\"></head><body class=\"text-center\">");

  component_globals_tag({}, out);

  out.w("<h1>Central de Bem Estar</h1><form class=\"form-signin\"><h3 class=\"h3 mb-3 font-weight-normal\">Please sign in</h3><div class=\"container\"><label for=\"inputEmail\" class=\"sr-only\">Email address</label><input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required autofocus><label for=\"inputPassword\" class=\"sr-only\">Password</label><input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required></div><div class=\"checkbox mb-3\"><label><input type=\"checkbox\" value=\"remember-me\"> Remember me</label></div><div class=\"container\"><button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button></div></form>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "26");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/provanodejs$1.0.0/src/app/views/login/login.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/core/await/reorderer-renderer"
    ]
  };
