const user = document.getElementById('user');
const password = document.getElementById('password');
const boton = document.getElementById('boton');

var linkElement = document.createElement("link");
linkElement.rel = "stylesheet";
linkElement.href = "assets/registro.css";



boton.addEventListener("click", function (event) {
    event.preventDefault();
    procesarEvento(boton);
});

function procesarEvento(boton) {
    console.log(user.value);
    console.log(password.value);

    var newWindow = window.open("", "_blank");
    newWindow.document.write("<div class='contenedor'> <h2>Registrado con exito:</h2>");
    newWindow.document.write("<p><strong>Nombre:</strong> " + user.value + "</p>");
    newWindow.document.write("<p><strong>Contraseña:</strong> " + password.value + "</p> </div>");
    newWindow.document.title = "Registrado!";
    newWindow.document.head.appendChild(linkElement);

}
