var Usuario = document.getElementById('Usuario');
var password = document.getElementById('password');
var error = document.getElementById('error');
error.style.color ='red';

function enviarFormulario(){
    console.log('Enviar Formulario...');
    var mensajesError = [];

    if(Usuario.value === null || Usuario.value === ''){
        mensajesError.push('Ingresa tu usuario');
    }

    if(password.value === null|| password.value === ''){
        mensajesError.push('Ingresa tu password');
    }

    error.innerHTML = mensajesError.join(', ');
    return false;
    }