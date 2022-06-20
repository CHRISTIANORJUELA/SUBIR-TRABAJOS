const url = 'https://629faf73461f8173e4ef0b80.mockapi.io/FACTUR/A/Factura';
const boton = document.querySelector('#id_btn').addEventListener("click",comprobar_primero);
function input1letras(e) {
    key=e.keyCode || e.which;
    teclado=String.fromCharCode(key).toLowerCase();
    letras = "abcdefghijklmnñopqrstuvwxyz";
    especiales = "8-37-38-46-164";
    teclado_especial=false;
   
    for(let i in especiales){
       if(key==especiales[i]){
           teclado_especial_=true;break;
       }
    }
    if(letras.indexOf(teclado) == -1 && !teclado_especial){
       return false
    }
};

function inputNumeros(e) {
    key=e.keyCode || e.which;
    teclado=String.fromCharCode(key);
    numeros = "0123456789";
    especiales = "8-37-38-46-164";
    teclado_especial=false;
   
    for(let i in especiales){
       if(key==especiales[i]){
           teclado_especial_=true;break;
       }
    }

    if(numeros.indexOf(teclado) == -1 && !teclado_especial){
       return false
    }
}

 function comprobar_primero () {
    const nombres = document.getElementById('input-nombre').value;
    const tarjetaCreditos = parseInt(document.getElementById('input-tarjeta').value);
    const telefonos = parseInt(document.getElementById('input-telefono').value);
    const nombreV =Boolean(nombres);
    const tarjetaDeCreditoV = Boolean(tarjetaCreditos);
    const telefonoV= Boolean(telefonos);
    if((nombreV == true && tarjetaDeCreditoV == true) && telefonoV == true  ){
        const verdadTarjeta = isNaN(tarjetaCreditos);  
        const verdadTelefono = isNaN(telefonos)
        if (verdadTarjeta == false && verdadTelefono == false) {
         api(tarjetaCreditos,telefonos);
        }
    }
}

async function api(tarjetaCreditos,telefonos) {
    try {
        res = await fetch(url);
        post = await res.json();
        comparar(post,tarjetaCreditos,telefonos)
    } catch (error) {
        
    }
}

function comparar(post,tarjetaCreditos,telefonos) {
    const elemento = post.find(item => item.TarjetaDeCredito ==tarjetaCreditos && item.Telefono ==telefonos);
    if(elemento != undefined){
        setTimeout( function() { window.open('http://127.0.0.1:5501/Proyecto%20Final/funciones.html', '_blank'); }, 2500 );
    }
}

