function sumarElementos(numeros){
    return numeros.reduce((total,numero)=> total + numero, 0);
}

let arrayNumeros = [1, 2, 3, 4, 5];
let resultado = sumarElementos(arrayNumeros);

console.log("La suma de los elementos es:", resultado);