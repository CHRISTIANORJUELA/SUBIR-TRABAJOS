var url = 'https://629faf73461f8173e4ef0b80.mockapi.io/FACTUR/A/Factura';
const boton = document.getElementById('id_btn');
boton.addEventListener("click",subir_baseDeDatos);
var objetoSubirBase = [];
var post =[];

function subir_baseDeDatos () {
    console.log('hola');
    let nombres = document.getElementById('input-nombre').value;
    let tarjetaCreditos = parseInt(document.getElementById('input-tarjeta').value);
    let telefonos = parseInt(document.getElementById('input-telefono').value);
    let objetoInformacion = {
        Nombre : nombres,
        tarjetaCredito : tarjetaCreditos,
        telefono : telefonos
    }
    objetoSubirBase.push(objetoInformacion);
    console.log(objetoSubirBase);
    saveUser(objetoInformacion)
}


function saveUser(objetoInformacion){
    fetch(`${url+objetoSubirBase}`,{
        method:'POST',
        body:JSON.stringify(objetoInformacion),
        headers:{
            "Content-type":""
        }
    })
    .then(response=>response.json());
}