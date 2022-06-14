function constructor(id,marca,precio,cantidad) {
    this.id = id;
    this.marca = marca;
    this.precio = precio;
    this.cantidad = cantidad;
};
var base ={};
if(localStorage.getItem("personas")){
        personas=JSON.parse(localStorage.getItem("personas"));
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
   var carrito = new constructor(id,marca,precio,cantidad);
   if(base.hasOwnProperty(carrito.id)){
     carrito.cantidad = base[carrito.id].cantidad +1;
   }
   base[carrito.id] = {...carrito}
   operaciones();
}

const operaciones = () =>{
var total;
Object.values(base).forEach(item =>{
  total = `${item.cantidad * item.precio}`
})

console.log(total);
}



