const user = document.getElementById('user');
const password = document.getElementById('password');
const boton = document.getElementById('boton');

boton.addEventListener("click", function(event){
   event.preventDefault();
    procesarEvento(boton);
});
function procesarEvento(boton){
    console.log(user.value);
    console.log(password.value);
}