import {mayor,convertir} from "../modules/modulo_funciones/em.js";
const tablabody = document.getElementById('items_tabla_carrito');
const templateTbody = document.getElementById('template_tbody');
const boton1 =document.querySelector('#button_compra').addEventListener('click',agregarCompra);
const tablaCompra = document.getElementById('tbody_totalCompras');
const templateCompra = document.getElementById('templateCompra');
const tablaCompraFooter = document.getElementById('tfooter');
const templateFooter = document.getElementById('templateFooter');
const fragmento = document.createDocumentFragment();
const fragmentoCompra = document.createDocumentFragment();
const fragmentoFooter = document.createDocumentFragment();
const boton2 = document.querySelector('#boton-filtrar').addEventListener('click',funcionEnviarBase);
var base =[];
function constructor(id,marca,precio,cantidad) {
    this.id = id;
    this.marca = marca;
    this.precio = precio;
    this.cantidad = cantidad;
};

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
   var carrito;
   var obj = objeto.childNodes;
   var id = obj[1].textContent;
   let respuesta = base.some(valor =>{
    if(valor.id==id){
        return true
    }else{
        return false
    }
   })
   if(respuesta==true){
    let indice = base.findIndex(item => item.id==id);
    base[indice].cantidad +=1;
   }else if(respuesta==false){
    let marca = obj[5].textContent;
    let precio = obj[7].textContent;
    let cantidad = 1;
    carrito = new constructor(id,marca,precio,cantidad);
    base.push(carrito);
   }
   subir_carrito();
}
 
let subir_carrito = ()=>{
  base.forEach(item => {
    tablabody.textContent= "";
    const clone = templateTbody.content.firstElementChild.cloneNode(true);
    clone.querySelectorAll('td')[0].textContent = item.marca;
    clone.querySelectorAll('td')[1].textContent = item.cantidad;
    fragmento.appendChild(clone);
  })
  tablabody.appendChild(fragmento);
}

function agregarCompra() {
  base.forEach(item =>{
    tablaCompra.textContent = "";
    const clone = templateCompra.content.firstElementChild.cloneNode(true);
    clone.querySelectorAll('td')[0].textContent = item.marca;
    clone.querySelectorAll('td')[1].textContent = `${item.cantidad * item.precio}`;
    fragmentoCompra.appendChild(clone);
  })
  tablaCompra.appendChild(fragmentoCompra);
  sumar_y_agregar()
}

function sumar_y_agregar() {
  let suma = base.reduce((total,item) =>{
     total += parseInt(`${item.cantidad * item.precio}`);
     return total
  },0)
  tablaCompraFooter.textContent = "";
  const cloneTol =  templateFooter.content.cloneNode(true);
  cloneTol.querySelectorAll('td')[0].textContent = suma;
  fragmentoFooter.appendChild(cloneTol);
  tablaCompra.appendChild(fragmentoFooter);
}

 function funcionEnviarBase(){
  let resultado = mayor(base);
  let NuevoValor = convertir(resultado);
  console.log(NuevoValor);
  let textTarea = document.querySelector('#textTarea1');
  document.getElementById('textTarea1').value = "";
  NuevoValor.forEach(item =>{
    document.getElementById('textTarea1').value +=  `Marca: ${item.marca} - Total: ${item.total} \n`
    textTarea.style.display = 'block';
  })
 }