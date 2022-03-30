function CalculaDescuento(precio, descuento){
    return [precio*(100-descuento)/100];
}

function PrecioConDescuento(){
    const inputPrecio = document.getElementById("precio").value;
    const inputDescuento = document.getElementById("descuento").value;
    
    const  resultado = CalculaDescuento(inputPrecio,inputDescuento)
    document.getElementById("resultado").innerText = resultado;   
}

//DESCUENTO CUPON
let estado = true;
    function DesapareceAparece(){
if(estado == true){
    document.getElementById("desaparece").style.display = "block";
    estado = false;
}else{
    document.getElementById("desaparece").style.display = "none";
    estado = true;
}
}
let valor = 0;
function doce(){
    valor = 12;
    document.getElementById("desaparece").style.display = "none";
    estado = true;
}
function veinte(){
    valor = 20;
    document.getElementById("desaparece").style.display = "none";
    estado = true;
}
function veintiCinco(){
    valor = 25;
    document.getElementById("desaparece").style.display = "none";
    estado = true;
}
function PrecioConDescuentoCupon(){
    const inputPrecio = document.getElementById("precio1").value;
    const EligeDescuento = CalculaDescuento(inputPrecio, valor);
    document.getElementById("resultado1").innerText = EligeDescuento;
    valor = 0;
}


