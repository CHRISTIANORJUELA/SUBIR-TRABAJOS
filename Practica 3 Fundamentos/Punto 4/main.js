function datos() {

    var bono =parseInt(Math.random()*100000);

    var huevos = document.getElementById("idhuevos").value;
    var leche = document.getElementById('idleche').value;
    var  pan= document.getElementById('idpanes').value;
    var fruta = document.getElementById('idfrutas').value;

    if(huevos<=30){
        huevos *=15000;
    }else if (huevos>30){
        alert("Exediste el monto de compra del producto huevos");
        fruta=0;
    }

    if(leche<=20){
        leche*=3500;
    }else if (leche>20){
        alert("Exediste el monto de compra del producto leche");
        fruta=0;
    }

    if(pan<=50){
        pan*=2000;
    }else if (pan>50){
        alert("Exediste el monto de compra del producto");
        fruta=0;
    }

    if(fruta<=50){
        fruta*=2000;
    }else if (fruta>50){
        alert("Exediste el monto de compra del producto fruta");
        fruta=0;
    }
    
   
    var sum= fruta + leche + pan + huevos;
    var des = sum - bono;
    alert("El monto total de la compra fue"+sum);
    alert("Por concepto de cliente primium obtuvo un bono de "+ bono);
    alert(`El monto total a pagar es ${ des}`);

}





