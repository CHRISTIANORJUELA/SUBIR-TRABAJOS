// document.getElementById(id) ; 
//  element.getElementsByTagName(name)  ; 
//   document.createElement(name) ; 
//   parentNode.appendChild(node) ; 
//   element.innerHTML;
//   element.style.property = "value";
//   element.set.Attribute
//   element.getAttribute
//   element.addEventListener

//--------------------------------------------------------------------

// Buscamos el Documento document.getElementById | 
//  lo corremos 300px a la izquierda element.style.property = "value";
let p1 = document.getElementById('prueba');
console.log(p1);
p1.style.color = "navy";
p1.style.letterSpacing = "23px";
p1.style.position ="relative";
p1.style.left = "450px";

// tambien lo podemos buscar con element.getElementsByTagName(name) 
// Solo que este busca una etiqueta en su valor

//-----------------------------------------------------------------------

// Creamos un elemento document.createElement

const newElement = document.createElement('p');

//-------------------------------------------------------------------------

// Le asignamos un valor a la etiqueta element.innerText
newElement.innerText="Mi enlace JS";

//--------------------------------------------------------------------------

// Lo asignamos al Dom y al padre element.appendChild(name =(Element))

p1.appendChild(newElement);

newElement.style.color ="red";

//---------------------------------------------------------------------------
//Usamos set.Attribute para agregar un atributo y su valor

const set =newElement.setAttribute('class','hola');
//---------------------------------------------------------------------

// Usamos element.getAttribute(attribute)
const as= newElement.getAttribute('style')
console.log(as);
//--------------------------------------------------------------------
// Usamos 
// element.addEventListener 
//  window.scrollTo 
// setTimeout
// para que el elemento tenga funcionalidad



const boton1 = document.getElementById('boton-1');
let time ;

//--Usamos una funcion
boton1.addEventListener('click',presionarBoton1 );

function presionarBoton1(){
    time = setTimeout(ls,2000);

        function ls(){
        alert('registro exitoso');
        window.scrollTo(500,200);
        }
    
}












