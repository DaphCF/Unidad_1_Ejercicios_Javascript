const promesasSuma = (num1, num2) => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve (num1 + num2);
        }, 2000);
    });
};

promesasSuma(3, 7).then(resultado => {
    console.log("La suma es:", resultado);
});