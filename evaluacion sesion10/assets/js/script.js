$(document).ready(function() {
  $(".text-body-secondary").click(function() {
      var idBoton = $(this).attr("id");
      var detallesId = "#detalles" + idBoton;
      $(detallesId).toggle();
  });

  $(".btn-close").click(function() {
      $(this).closest(".detalles").hide();
  });
});
