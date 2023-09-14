const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = "";
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    let regexNombre = /^[A-Za-záéíóúÁÉÍÓÚñÑüÜ\s']+$/;
    parrafo.innerHTML= ""
    if(!regexNombre.test(nombre.value)){
        warnings += `El nombre no es valido <br>`;
        entrar = true;
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`;
        entrar = true;
    }

    if(entrar){
        parrafo.innerHTML = warnings;
    }else{
        parrafo.innerHTML = "Enviado";
    }
})