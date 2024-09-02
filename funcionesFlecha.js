const filtrarPares = numeros => numeros.filter(numero => numero % 2 === 0);

const arrayNumeros = [1,2,3,4,5,6];
const pares = filtrarPares(arrayNumeros);

console.log("Numeros pares:", pares);