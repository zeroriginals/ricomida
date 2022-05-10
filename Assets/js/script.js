//Tooltip//
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

//javascript//

//alert//
var enviarCorreo = document.getElementById("enviarCorreo");
enviarCorreo.addEventListener("click", function () {
    alert("El correo fue enviado correctamente...");
});


//jquery//
$(document).ready(function () {
    //dblclick//
    $(".receta-titulo").on("dblclick", function () {
        $(this).css({
            "color": "red",
            "font-size": "1.25em"
        });
    });

    //toggle//
    $(".card-click").on("click", function () {
        $(".card-hide").toggle();
    });
    $(".card-click1").on("click", function () {
        $(".card-hide").toggle();
    });
    $(".card-click2").on("click", function () {
        $(".card-hide").toggle();
    });








});


