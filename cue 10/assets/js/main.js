$(document).ready(function() {
    // Mostrar y ocultar el div #text2
    $('#text1').mouseenter(function() {
        $('#text2').removeClass('hidden');
    }).mouseleave(function() {
        $('#text2').addClass('hidden');
    });

    // Agrandar imagen al hacer clic en ella
    $('#caja2').click(function() {
        $('#img').css('width', '40%');
    });

    // Restaurar tamaño de la imagen al salir del contenedor #caja2
    $('#caja2').mouseout(function() {
        $('#img').css('width', '20%');
    });

    // Agrandar texto al hacer doble clic en este elemento
    $('#caja3').dblclick(function() {
        $(this).toggleClass('p-large');
    });
});
