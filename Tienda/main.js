

var plantilla ={
    
}

var array = [ ];

function subir(event){

    event.preventDefault();
    var categoria = document.getElementById('idCategoria').value;
    var productos = document.getElementById('idProducto').value;
    var cantidad = document.getElementById('idCantidad').value;
    var precio = document.getElementById('idPrecio').value;

    unir(categoria, productos, cantidad, precio);

}

function unir (categoria, productos, cantidad, precio) {
   
    plantilla = new Object();
    plantilla.categoria = categoria;
    plantilla.nombre = productos;
    plantilla.cantidad = cantidad;
    plantilla.precio = precio;

    array.push(plantilla );
}
//_-------------Primera Función-------------------

function informarCategoria(event) {
    event.preventDefault();
    var cont = [];
    var arrayCont = [];
    var filtrado = array.filter((valor) => valor.categoria != "");
    filtrado.forEach((valor) =>{
    arrayCont.push(valor.categoria);
    })
    mandar(arrayCont,cont);
}

function mandar(arrayCont,cont) {
    arrayCont.forEach((valor) => {
        if(cont[valor]){
            cont[valor]++;
        }else{
            cont[valor] = 1
        }
    })

    console.log(cont.toString());
    console.log(cont);

    document.getElementById('insertar-Valor-Categoria');
}

// ------------------Segunda Funcion----------------------------------

function cantidadProductos(event) {
    event.preventDefault();
    arrayCont = [];
    arrayCont = array.filter((valor) => valor.name != "");
    let longitud = arrayCont.length;
    document.getElementById('id-cantidadProducto').value = longitud;
}

//--------------------------Tercera Funcion-----------------------
function valorProductos(event) {
    event.preventDefault();
    let acum = 0;
    let filtro = array.filter((valor) => valor.precio != "");
    console.log(filtro);
        
        filtro.forEach((valor) =>{
            valor.precio = parseInt(valor.precio);
            acum += valor.precio;
        })
    document.getElementById('ID-valorProductos').value = acum;
}

// -----------------------------Cuarta Funcion--------------------------

function disminuirExistencias(event){
    
    event.preventDefault();

    let nombres = document.getElementById('nombre-para-disminuir').value;
    let cantidad = document.getElementById('existencias-disminuir').value;
    cantidad =  parseInt(cantidad);
    var filtro = array.filter((valor) => valor.nombre == nombres );
    
    filtro.forEach((valor) =>{
        valor.cantidad -= cantidad;
    })
    
    document.getElementById('input-restar-existencias').value = JSON.stringify(filtro);
}


//-----------------------------Quinta Funcion----------------------------------


function AumentarExistencias(event) {
    
    event.preventDefault();

    let nombres = document.getElementById('nombre-para-disminuir').value;
    let cantidad = document.getElementById('existencias-disminuir').value;
    cantidad =  parseInt(cantidad);
    var filtro = array.filter((valor) => valor.nombre == nombres );
    
    filtro.forEach((valor) =>{
        // valor.cantidad = parseInt(valor.cantidad);
        valor.cantidad += cantidad;
    })
    
    console.log(filtro);
    document.getElementById('input-sumar-existencias').value = JSON.stringify(filtro);

}


///-------------------------Sexta Funcion---------------------------

function buscarNombre(event) {
    
    event.preventDefault();
    var mensaje;

    
    let nomBusqueda = document.getElementById('nombre-buscar').value;

    for (let index = 0; index < array.length; index++) {
        
        if(array[index].nombre == nomBusqueda) {
            mensaje = "Si existe el producto";
            console.log(mensaje);

        }
        
    }

    if(mensaje == undefined || mensaje == null){

        console.log("El producto no existe");
    }

}


//-------------------------Septima Funcion---------------------------

function eliminarProducto(event) {
    event.preventDefault();

    let remover = document.getElementById('eliminarProducto').value;

    for (let index = 0; index < array.length; index++) {
        
        if(array[index].nombre == remover) {

            delete array[index].nombre
           
        }else{
            console.log();
        }
        
    }

    console.log("El array con el producto ya eliminado");

    console.log(array);

}


//----------------------------Octava Funcion-------------------------


function alfabeto(event) {
    
    event.preventDefault();
    let orden = [];

    for (let index = 0; index < array.length; index++) {
        if((array[index].nombre != undefined) && (array[index].nombre != "" )){

            orden.push(array[index].nombre);
        }
        
    }

    let alfabet = orden.sort((a,b)=>{
        
        if(a==b){
            return 0;
        }

        if(a<b){
            return -1;
        }

        if(a>b){
            return 1
        }

    })

    console.log("Los productos ordenados de forma ascendente quedaron haci :")

    console.log(alfabet);

}


//---------------------------Novena Funcion----------------------

function listarFinal(event) {
    
    event.preventDefault();

    subirFinal = document.getElementById('listar-Final').value;

    var newObject = {
       
        categoria : "",
        nombre :    "",
        cantidad : "",
        precio : "",

    }

    newObject.nombre = subirFinal;

    array.push(newObject);

    console.log("El array con el producto al final quedo Haci :");

    console.log(array);


}


//---------------------------Decima Funcion-----------------------------


function listarPrincipio(event){
    
    event.preventDefault();

    subirPrincipio = document.getElementById('listarPrincipio').value;

    var newObject = {
       
        categoria : "",
        nombre :    "",
        cantidad : "",
        precio : "",

    }

    newObject.nombre = subirPrincipio;

    array.unshift(newObject);

    console.log("El array con el elemento al principio quedo Haci")

    console.log(array);

}

//--------------Guardar Cambios------------------------------


function cargarLocal(event) {
    
    event.preventDefault();

    copia = JSON.stringify(array);

    localStorage.setItem('Carga', copia );
}


