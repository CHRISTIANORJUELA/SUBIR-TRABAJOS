const url = 'https://629faf73461f8173e4ef0b80.mockapi.io/FACTUR/A/Factura';
const boton = document.getElementById('id_btn');
boton.addEventListener("click",subir_baseDeDatos);
var objetoSubirBase = [];
var post =[];

function subir_baseDeDatos () {
    console.log('hola');
    const nombres = document.getElementById('input-nombre').value;
    const tarjetaCreditos = parseInt(document.getElementById('input-tarjeta').value);
    const telefonos = parseInt(document.getElementById('input-telefono').value);
    let objetoInformacion = {
        Nombre : nombres,
        tarjetaCredito : tarjetaCreditos,
        telefono : telefonos
    }
    objetoSubirBase.push(objetoInformacion);
    console.log(objetoSubirBase);
    saveUser(objetoInformacion);
}


 async function  saveUser(objetoInformacion){
    // fetch(url,{
    //     method:'POST',
    //     body:JSON.stringify(objetoInformacion),
    //     headers:{
    //         "Content-type":"application/json"
    //     }
    // }).then(response=>response.json());

    // fetch(url)
    // .then(res =>{
    //     console.log(res);
    // })
    
    // try {
    //     const response= await fetch(url);
    //     const post = await response.json();
    //     console.log(post);
    // } catch (error) {
    //     console.log(error);
    // }

    // try {
    //     fetch(url)
    // .then(res => res.json())
    // .then(data => {
    //     console.log(data);
    // })
    // } catch (error) {
    //     console.log(error);
    // }

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
    } catch (error) {
        console.log(error);
    }
    
   

}
