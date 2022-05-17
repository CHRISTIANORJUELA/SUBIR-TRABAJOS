

function main(buscarnombre)   {
    
    var nombre =["christian ", "pedro" , "manuel"]
    var nota = [5,4,5];
    var veces = 2  ;
    var estudiante;

for(var i= 0; i<=2; i++){
  
    ///var prom += nota[i];//???
    ///var resultado = prom/3; ///???
  if(i==0){
    var maxnota = nota[i];
    var minnota = nota[i];
  }else if( i>0 && (nota[i]>maxnota)){
    maxnota = nota[i];
    estudiante = nombre[i+1];
    console.log("se repite "+ veces * 2);

  }else if( i>0 && (nota[i]<minnota)){
      minnota = nota[i];
  }

  if(i==2){
    console.log("La nota más alta es, :" +maxnota+" y fue obtenida por el estudiante :"+estudiante)
    console.log("La nota minima fue : " +minnota)
    console.log(veces)

  }

  if(i==2){
    buscarnombre(nombre,nota);

  }

  ///if(i==2){
      ///.log("el promedio es :"+resultado)
  ///}

  
}

}


function buscarnombre(nombre,nota){

var bnombre =prompt("Cual nombre quieres  ingresa un numero");

console.log("El nombre buscado es : " + nombre[bnombre]+ " y tiene una nota de : "+nota[bnombre])



}


main(buscarnombre)

// REVISION