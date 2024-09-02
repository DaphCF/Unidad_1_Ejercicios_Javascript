function operacion(num1, num2, callback){
    return callback(num1, num2);
}

function sumar(a,b){
    return a+b;
}

function restar(a,b){
    return a-b;
}

function multiplicar(a,b){
    return a*b;
}

function dividir(a,b){
    if (b!==0){
        return a/b;
    }else{
        return "No se puede dividir entre 0."
    }
}

console.log("Suma: ",operacion(10,3,sumar));
console.log("Resta: ",operacion(10,3,restar));
console.log("Multiplicación: ",operacion(10,3,multiplicar));
console.log("División: ",operacion(10,3,dividir));