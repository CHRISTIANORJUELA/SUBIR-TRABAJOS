var alumnos = 3;
var valor=100000;
var pago;
for(var i = 0; i < alumnos; i++){

   var grado =prompt("de que grado eres");
   var ciudad =prompt("de que ciudad eres");
   
   if(i==0){
      if( (i==0) && (grado==10 || grado==11 && ciudad=="Armenia") ) {
         alert("Felicidades eres el primero en registrate tienes un descuento del 100%" );
    }else {
        alert("Hola no obtienes descuento");
    }

   }
   
   if(i>0){
   if(i>0 && (grado==10 || grado==11 && ciudad =="Armenia") ){
      descuento=valor*0.30;
      pago = 100000-descuento;
      alert("tiene un desvuento de :"+pago)
   }else{
      alert("Hola no obtines descuento")
   }
   }


}