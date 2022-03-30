function CalculaDescuento(precio, descuento){
    return [precio*(100-descuento)/100];
}

function PrecioConDescuento(){
    const inputPrecio = document.getElementById("precio").value;
    const inputDescuento = document.getElementById("descuento").value;
    
    const  resultado = CalculaDescuento(inputPrecio,inputDescuento)
    document.getElementById("resultado").innerText = resultado;   
}


