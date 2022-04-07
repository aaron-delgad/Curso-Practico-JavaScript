function CalculaMedianaAritmetica(){
    let resultado = 0;
    const inputLista1 = document.getElementById("mediana1").value;
    // alert('hola'+inputLista1);
    const array = inputLista1.split(',');
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
        alert('impar');
    }
    document.getElementById("respMediana").innerText = resultado;
}