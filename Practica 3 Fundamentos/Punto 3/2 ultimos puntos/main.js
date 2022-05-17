

// Usamos SetInterval para que se pueda repetir una
//funcion varias veces con un tiempo de pausa
let numero = 3;

let lanz = setInterval(conteo,1000);

function conteo(){
    alert(`lanzamiento en ${numero} segundos`);
    numero--;
    if(numero == 0){
        clearInterval(lanz);
    }

}

// Usamos comfirm para preguntar al usuario 
// y nos devuelve un valor Boolean
let pregunta = confirm("Estan bien");

if(pregunta==true){
    alert("Feliz dia");
}else if(pregunta==false){
    alert("Que tenga un buen día");
}

// Usamos ForEach para recorrer el arreglo

let arreglo = [1,2,3,4,5,6,7,8,9,10]

arreglo.forEach((item , index ,arr) => {
    console.log('a[' + index + '] = ' +item);
})






