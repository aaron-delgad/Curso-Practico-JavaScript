// Código del cuadrado
// console.group("Cuadrados");

function perimetrocuadrado(lado){
    return lado * 4;
}
 
function areacuadrado(lado){
return lado*lado;
}
// console.groupEnd();

// Código del Triángulo
// console.group("Triángulos");

function perimetroTriangulo(lado1,lado2,base){
    return lado1+lado2+base;
}

function areaTriangulo(base,altura){
    return (base*altura)/2;
}
// console.groupEnd();

//Código del Círculo
// console.group("Círculos");

//Diámetro
function diametrocirculo(radio){
    return radio * 2;
}

//PI
const PI = Math.PI;

//Circunferencia
function perimetrocirculo(radio){
    return diametrocirculo(radio) * PI;
}

//Área 
function areacirculo(radio){
    return (radio*radio)*PI;
}
// console.groupEnd();

// Aquí interactuamos con el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const dos = input.value;

    const perimetro = perimetrocuadrado(dos);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const uno = input.value;

    const area = areacuadrado(uno);
    alert(area);
}