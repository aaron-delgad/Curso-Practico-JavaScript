function mediaAritmetca(lista){
    const suma = lista.reduce(
       function (SumaElement = 0, nuevoElement){
        return Number(SumaElement) + Number(nuevoElement);
    })
    return suma;
}

function CalculaMediaAritmetica(){
    const inputLista1 = document.getElementById("media1").value;
    let array = inputLista1.split(','); 
    const sumaLista = mediaAritmetca(array);
    const NTotal = array.length;
    const media = sumaLista/NTotal;
    document.getElementById("respMedia").innerText = media;
}

function CalculaMedianaAritmetica(){
    let resultado = 0;
    const inputLista1 = document.getElementById("mediana1").value;
    const array1 = inputLista1.split(',');
    const array = array1.sort(
        function (elementA, elementB){
            return elementA - elementB;
        }
    )
    const numItem = array.length/2;
    residuo = array.length%2;
    if(residuo==0){
        const valor1 = array[numItem];
        const valor2 = array[numItem-1];
        resultado = (Number(valor1) + Number(valor2))/2;
    }else{
        const valor4 = Math.floor(numItem);
        const valor3 = array[valor4]
        resultado = valor3;
    }
    document.getElementById("respMediana").innerText = resultado;
}

function CalculaModa(){
    const inputLista1 = document.getElementById("moda").value;
    const array = inputLista1.split(',');
    const lista1Count = {};
    array.map(
        function (elemento){
            if(lista1Count[elemento]){
                lista1Count[elemento] += 1;
            }else{
                lista1Count[elemento] = 1;
            }
        }
    );
    const listaArray = Object.entries(lista1Count).sort(
        function (elementoA, elementoB){
            return elementoA[1]-elementoB[1];
        }
    );
    const moda = listaArray[listaArray.length -1];
    const moda1 = moda[0];
    document.getElementById("respModa").innerText = moda1;
}


