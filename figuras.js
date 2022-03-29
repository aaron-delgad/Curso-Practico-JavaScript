//CUADRADO
function perimetrocuadrado(lado){
    return lado * 4;
}
function areacuadrado(lado){
return lado*lado;
}
//TRIANGULO
function perimetroTriangulo(lado1,lado2,base){
    return Number(lado1)+Number(lado2)+Number(base);
}
function areaTriangulo(base,altura){
    return (base*altura)/2;
}
//CIRCULO
function diametrocirculo(radio){
    return radio * 2;
}
//PI
const PI = Math.PI;
function perimetrocirculo(radio){
    return diametrocirculo(radio) * PI;
}

function areacirculo(radio){
    return (radio*radio)*PI;
}
// Aquí interactuamos con el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const dos = input.value;

    const perimetro = perimetrocuadrado(dos);
    document.getElementById("resCuadrado").value = perimetro;
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const uno = input.value;

    const area = areacuadrado(uno);
    document.getElementById("resCuadrado").value = area;
}

//TRIANGULO
function CalculaPerimetroTriangulo(){
    const input1 = document.getElementById("lado1");
    const lado1 = input1.value;
    const input2 = document.getElementById("lado2");
    const lado2 = input2.value;
    const input3 = document.getElementById("lado3");
    const lado3 = input3.value;

    const perimetroTriangulo1 = perimetroTriangulo(lado1, lado2, lado3)
    document.getElementById("resPeriTriangulo").value = perimetroTriangulo1;
}
function CalculaAreaTriangulo(){
    const inputBase = document.getElementById("base");
    const base = inputBase.value;
    const inputAltura = document.getElementById("altura");
    const altura = inputAltura.value;
    const areaTriangulo1 = areaTriangulo(base, altura);
    document.getElementById("resAreaTriangulo").value = areaTriangulo1;
}
//CIRCULO
function CalculaDiametroCirculo(){
    const inputdiametro = document.getElementById("InputCirculo");
    const diameCirculo = inputdiametro.value;

    const diametCirculo1 = diametrocirculo(diameCirculo);
    document.getElementById("resCirculo").value = diametCirculo1;
}
function CalculaPerimetroCirculo(){
    const inputPerimetro = document.getElementById("InputCirculo");
    const perimCirculo = inputPerimetro.value;

    const perimCirculo1 = perimetrocirculo(perimCirculo);
    document.getElementById("resCirculo").value = perimCirculo1;
}
function CalculaAreaCirculo(){
    const inputAreaci = document.getElementById("InputCirculo");
    const areaCirculo = inputAreaci.value;

    const areaCirculo1 = areacirculo(areaCirculo);
    document.getElementById("resCirculo").value = areaCirculo1;
}