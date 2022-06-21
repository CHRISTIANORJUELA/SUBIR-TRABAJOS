const boton = document.querySelector('#id_btn').addEventListener('click',validar);
let inputs = document.getElementById('input-nombre');
const btnRocket = document.querySelector('#rocket').addEventListener('click',mostrarNombres);
const url = "https://629faf73461f8173e4ef0b80.mockapi.io/FACTUR/A/Factura";
const objetoSubirBase = [];

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

function mostrarNombres() {
    if(localStorage.getItem('key')){
        let devuelto = JSON.parse(localStorage.getItem('key'));
        let nombre = devuelto.map(item => {
            return {
                Nombre: item.Nombre
            }
        })
        var posicion1 = Object.values(devuelto).findIndex(item => {
            if(item.TarjetaDeCredito == 9994445 ){
               return `${item.Nombre} eres el administrador`
            }else {
                return false
            }
        });
        imprimirLocalStorage(posicion1,nombre,devuelto)
    }
}

function imprimirLocalStorage(posicion1,nombre,devuelto) {
    if(posicion1 != -1 && posicion1 != undefined){
        document.getElementById('textTarea2').value = "";
        document.getElementById('textTarea2').value = `El administrador es : ${devuelto[posicion1].Nombre}`;
        document.getElementById('textTarea2').style.display = 'block'
    }
    document.getElementById('textTarea1').value = "";
    nombre.forEach((item) =>{
        document.getElementById('textTarea1').value+= `${item.Nombre} \n`
        document.getElementById('textTarea1').style.display = 'block'
    })
}

async function validar() {
    const nombre = document.getElementById('input-nombre').value;
    const tarjetaDeCredito = document.getElementById('input-tarjeta').value;
    const telefono = document.getElementById('input-telefono').value;
    const nombreV =Boolean(nombre);
    const tarjetaDeCreditoV = Boolean(tarjetaDeCredito);
    const telefonoV= Boolean(telefono);
    if((nombreV == true && tarjetaDeCreditoV == true) && telefonoV == true  ){
        const verdadTarjeta = isNaN(tarjetaDeCredito);  
        const verdadTelefono = isNaN(telefono)
        if (verdadTarjeta == false && verdadTelefono == false) {
            const res = await fetch(url);
            const post= await res.json();
         asegurar(post,nombre,tarjetaDeCredito,telefono);
        }
    }
}

function asegurar(post,nombre,tarjetaDeCredito,telefono) {
    const bolean = post.some(item => (item.TarjetaDeCredito===tarjetaDeCredito && item.Telefono ===telefono));
    if (bolean == true) {
        alert('Error al ingresar');
    }else  if(bolean == false){
            let objetoInformacion = {
            Nombre : nombre,
            TarjetaDeCredito : tarjetaDeCredito,
            Telefono : telefono
             }
            objetoSubirBase.push(objetoInformacion);
            if(localStorage.getItem('key')){
                let devuelto = JSON.parse(localStorage.getItem('key'));
                devuelto.push(objetoInformacion);
                localStorage.setItem('key',JSON.stringify(devuelto));

            }else {
                var datosLocal = [];
                datosLocal.push(objetoInformacion)
                localStorage.setItem('key' ,JSON.stringify(datosLocal));
            }
               saveUser(objetoInformacion);
    }  
}

function  saveUser(objetoInformacion){
    try {
        fetch('https://629faf73461f8173e4ef0b80.mockapi.io/FACTUR/A/Factura',{
            method:'POST',
            body: JSON.stringify(objetoInformacion),
            headers:{
                "Content-type":"application/json"
            }
        })
           .then(res =>res.json())
           .then(data=> console.log(data))
            setTimeout( function() { window.open('http://127.0.0.1:5501/Proyecto%20Final/funciones.html', '_blank'); }, 2500 );
    } catch (error) {
        alert('Fallo en Conectar con el Servidor');
    }
}

