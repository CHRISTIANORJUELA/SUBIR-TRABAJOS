var ul_h = document.getElementById('ul_h');
var template = document.getElementById('template');
var fragmento = document.createDocumentFragment()
var boton = document.getElementById('boton');
var base =[];
var subir_todo_al_template;

function constructor(id,marca,precio,cantidad) {
    this.id = id;
    this.marca = marca;
    this.precio = precio;
    this.cantidad = cantidad;
};
// let caja1 = document.getElementById('caja1');
// let caja2 = document.getElementById('caja2').vaule;
// let caja3 = document.getElementById('caja3').value;
// let objeto = {
//   marca: caja1,
//   precio : caja2,
//   calidad : caja3
// }



if(localStorage.getItem('personas')){
        personas=JSON.parse(localStorage.getItem("key"));
    }
    else{
        personas=[];
    }
div_img_tabla.addEventListener('click',e =>{
  detectarBoton(e);
});

var  detectarBoton = ((e) =>{
    if(e.target.classList.contains('material-symbols-outlined')){
       var primerPadre= e.target.parentNode;
        var segundoPadre = primerPadre.parentNode;
       agregarCarrito(segundoPadre);
    }
    e.stopPropagation();
    
})

const agregarCarrito = objeto =>{
   let obj = objeto.childNodes;
   let id = obj[1].textContent;
   let marca = obj[3].textContent;
   let precio = obj[5].textContent;
   let cantidad = 1;
   let carrito = new constructor(id,marca,precio,cantidad);
  //  if(base.hasOwnProperty(carrito.id)){
  //    carrito.cantidad = base[carrito.id].cantidad +1;
  //  }
   base.push(carrito);
   console.log(base);
  //  subir_carrito();
}


// let subir_carrito = ()=>{
//   let copia = JSON.stringify(base);
//   localStorage.setItem('key', copia );
//   let devolver = localStorage.getItem('key');
//   subir_todo_al_template = new constructor(devolver[0].id,devolver.marca,devolver.precio,devolver.cantidad);
//   console.log(subir_todo_al_template);
// }

// let localStorager = () =>{
// copia = JSON.stringify(base);
// localStorage.setItem('key', copia );
// }




// const agregarmarca = () =>{
//   if(localStorage.getItem('key')){
//     key=JSON.parse(localStorage.getItem("key"));

// }
// else{
//     personas=[];
// }
//    subir_carrito = new constructor()
  
// }
// boton.addEventListener("click", agregarmarca);




