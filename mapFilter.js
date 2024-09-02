function filtrarPares(numeros){
    return numeros.filter(numero => numero % 2 === 0);
};

let arrayNumeros = [1, 2, 3, 4, 5, 6];
let pares = filtrarPares(arrayNumeros);

console.log("Numeros Pares", pares);