const boton = document.querySelector('#id_btn').addEventListener('click',validar);
let inputs = document.getElementById('input-nombre');
// inputs.addEventListener('keypress', function (e)  {

//     console.log('hola');
//     key=e.keyCode || e.which;
//     teclado=String.fromCharCode(key).toLowerCase();
//     letras = "abcdefghijklmnñopqrstuvwxyz";
//     especiales = "8-37-38-46-164";
//     teclado_especial=false;
   
//     for(let i in especiales){
//        if(key==especiales[i]){
//            teclado_especial_=true;break;
//        }
//     }

//     if(letras.indexOf(teclado) == -1 && !teclado_especial){
//        return false
//       }
// });

const url = "https://629faf73461f8173e4ef0b80.mockapi.io/FACTUR/A/Factura";
const objetoSubirBase = [];


//   function myFunction(e) {
    //  console.log('hola');
    //  key=e.keyCode || e.which;
    //  teclado=String.fromCharCode(key).toLowerCase();
    //  letras = "abcdefghijklmnñopqrstuvwxyz";
    //  especiales = "8-37-38-46-164";
    //  teclado_especial=false;
    
    //  for(let i in especiales){
    //     if(key==especiales[i]){
    //         teclado_especial_=true;break;
    //     }
    //  }

    //  if(letras.indexOf(teclado) == -1 && !teclado_especial){
    //     return false
    //    }
// }

    


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
            console.log('hola');
            const res = await fetch(url);
            const post= await res.json();
         asegurar(post,nombre,tarjetaDeCredito,telefono);
        }
    }
}

function asegurar(post,nombre,tarjetaDeCredito,telefono) {
    const bolean = post.some(item => (item.TarjetaDeCredito===tarjetaDeCredito && item.Telefono ===telefono));
    console.log(bolean);
    if (bolean == true) {
        console.log('No puedes entrar')
    }else  if(bolean == false){
            let objetoInformacion = {
            Nombre : nombre,
            TarjetaDeCredito : tarjetaDeCredito,
            Telefono : telefono
             }
            objetoSubirBase.push(objetoInformacion);
            console.log(objetoSubirBase);
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
        console.log(error);
    }
}