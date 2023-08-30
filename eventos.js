const div= document.getElementById("miDiv");

const boton = docuement.getElementById("miBoton");
boton.addEventListener("click", function(event) {
    event.stopPropagation();
    alert("Se hizo clic en el boton");
});

div.addEventListener("click", function(){
    alert("Hola! Soy el div");
});