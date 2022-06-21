let mayor = (array) =>{
    let mas10 = array.filter(item => item.cantidad * item.precio >10000000);
    return mas10;
}

let convertir = (valor) =>{
    let trasmformar=valor.map(item => {
        return {
            marca: item.marca,
            total: `${item.precio * item.cantidad}`
        }
    });
    return trasmformar
}

export {mayor,convertir};
