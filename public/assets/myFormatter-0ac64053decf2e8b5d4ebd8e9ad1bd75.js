$(document).ready(function(){$("#form-carousel").carousel("pause"),$("#quotes-carousel").carousel({interval:5e3,pause:"none"}),$("#telefono").formatter({pattern:"({{999}}) {{999}}-{{9999}}",persistent:!0}),$("#celular").formatter({pattern:"({{999}}) {{999}}-{{9999}}",persistent:!0}),$("#consumo-mensual-promedio").formatter({pattern:"{{9999999}}",persistent:!0});var e="Campo requerido (no puede estar vacio)";$("#registration-form-1").bootstrapValidator({fields:{nombre:{validators:{notEmpty:{message:e}}},apellido:{validators:{notEmpty:{message:e}}},email:{validators:{notEmpty:{message:e},emailAddress:{message:"No es un e-mail valido"}}}}})});