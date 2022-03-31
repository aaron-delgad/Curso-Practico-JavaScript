
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
    document.getElementById("respMedia").innerText = sumaLista;
}