const url = 'https://629faf73461f8173e4ef0b80.mockapi.io/FACTUR/A/Factura';
const boton = document.getElementById('id_btn');
boton.addEventListener("click",subir_baseDeDatos);
var objetoSubirBase = [];
var post =[];

async function subir_baseDeDatos () {
    const nombres = document.getElementById('input-nombre').value;
    const tarjetaCreditos = parseInt(document.getElementById('input-tarjeta').value);
    const telefonos = parseInt(document.getElementById('input-telefono').value);
    
    const res = await fetch('https://629faf73461f8173e4ef0b80.mockapi.io/FACTUR/A/Factura');
    const post = await res.json();
    comprobar(post,nombres,tarjetaCreditos,telefonos)
}

function comprobar(post,nombres,tarjetaCreditos,telefonos) {
    
    const bolean = post.some(item => (item.TarjetaDeCredito==tarjetaCreditos && item.Telefono == telefonos));
    if (bolean == true) {
        console.log('No puedes entrar')
    }else  if(bolean == false){
            let objetoInformacion = {
            Nombre : nombres,
            TarjetaDeCredito : tarjetaCreditos,
            Telefono : telefonos
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
