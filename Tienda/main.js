var plantilla ={}
var array =[];
function principio (event){
    event.preventDefault();
    var categoria = document.getElementById('idCategoria').value;
    var productos = document.getElementById('idProducto').value;
    var cantidad = document.getElementById('idCantidad').value;
    var precio = document.getElementById('idPrecio').value;
    plantilla = new Object();
    plantilla.categoria = categoria;
    plantilla.nombre = productos;
    plantilla.cantidad = cantidad;
    plantilla.precio = precio;
    array.unshift(plantilla );
}
function final(event){
    event.preventDefault();
    var categoria = document.getElementById('idCategoria').value;
    var productos = document.getElementById('idProducto').value;
    var cantidad = document.getElementById('idCantidad').value;
    var precio = document.getElementById('idPrecio').value;
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
    var cont=[];
    var arrayCont = [];
    let filtrado = array.filter((valor) => valor.categoria != "");
    filtrado.forEach((valor) =>{
    arrayCont.push(valor.categoria);
    })
    let key = 0;
    mandarDatos(arrayCont,cont,key);
}

function mandarDatos(arrayCont,cont,key) {
    arrayCont.forEach((principalValue)=>{
    if(key===0){
        let obj={
        categoria: principalValue,
        cantidad:1
        }
        cont.push(obj);
    }

    if(key===1){
        let categoria = cont.some((valor) => valor.categoria == principalValue);
        if(categoria==false){
            let  createObj = {
                categoria:principalValue,
                cantidad: 1,
            }
            cont.push(createObj);
        }
        if(categoria==true){
            cont.forEach((valor) =>{       
            if(valor.categoria == principalValue){
            valor.cantidad +=1;
            }
            })
        }
    } 
    key=1;
    document.getElementById('insertar-Valor-Categoria').value=JSON.stringify(cont);
    })
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
    let filtro = array.filter((valor) => valor.nombre == nombres );
    filtro.forEach((valor) => valor.cantidad -= cantidad);
    document.getElementById('input-restar-existencias').value = JSON.stringify(filtro);
}

//-----------------------------Quinta Funcion----------------------------------

function AumentarExistencias(event) {
    event.preventDefault();
    let nombres = document.getElementById('nombre-para-aumentar').value;
    let cantidad = document.getElementById('existencias-aumentar').value;
    cantidad =  parseInt(cantidad);
    let filtro = array.filter((valor) => valor.nombre == nombres );
    filtro.forEach((valor) =>{
        valor.cantidad = parseInt(valor.cantidad);
        valor.cantidad += cantidad;
    })
    document.getElementById('input-sumar-existencias').value = JSON.stringify(filtro);
}


///-------------------------Sexta Funcion---------------------------

function buscarNombre(event) {
    event.preventDefault(); 
    let nomBusqueda = document.getElementById('nombre-buscar').value;
    const busqueda = array.some((valor) => valor.nombre == nomBusqueda);
    if(busqueda == true){
        document.getElementById('input-buscar-nombre').value = "Producto Encontrado";
    }else{
        document.getElementById('input-buscar-nombre').value = "Producto no Encontrado";
    }
}

//-------------------------Septima Funcion---------------------------

function eliminarProducto(event) {
    event.preventDefault();
    let remover = document.getElementById('eliminarProducto').value;
    let filtro = array.some((valor)=> valor.nombre == remover);
   if(filtro == true){
       let indice = array.findIndex((valor)=> valor.nombre == remover);
       delete array[indice];
       document.getElementById('input-eliminar').value = "Operación exitosa";
   }else{
     document.getElementById('input-eliminar').value = "Producto no encontrado";
   }
}

//----------------------------Octava Funcion-------------------------

function alfabeto(event) {
    event.preventDefault();
    let orden = [];
    let filtro = array.filter((valor) => valor.nombre != "");
    filtro.forEach((valor) => {
       orden.push(valor.nombre)
    })
    let alfabet = orden.sort();
    document.getElementById('input-alfabeto').value = alfabet;
    console.log(filtro);
    console.log(array);
}

// ------------------------Novena Funcion------------------------
function resetear(event) {
    event.preventDefault();
    array.map((valor)=> valor.precio=0);
    document.getElementById('input-resetear').value = JSON.stringify(array);
}
//-----------------------Decima Funcion--------------------------
function mayor_menor(event) {
  event.preventDefault();
  let filtrado = array.filter((valor) => valor.nombre != "" && valor.precio != "");;
  let calcularMayorPrecio = filtrado.reduce((mayor,valor)=>{
    if(mayor==0){
        mayor=valor.precio;
      }
      else if(valor.precio>mayor)
      {mayor=valor.precio;}
      return mayor;
    },0);
  document.getElementById('input-mayor-menor').innerHTML="El precio mas alto en la tienda es :" +calcularMayorPrecio;
}
//--------------Guardar Cambios------------------------------

function cargarLocal(event) { 
    event.preventDefault();
    copia = JSON.stringify(array);
    localStorage.setItem('Carga', copia );
}

