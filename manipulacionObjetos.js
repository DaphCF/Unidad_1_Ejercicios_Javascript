let persona = {
    nombre: "Andrea",
    edad: 23,
    ciudad: "Tepic",
    imprimirInfo: function(){
        console.log(`Soy ${this.nombre}, tengo ${this.edad} años y vivo en ${this.ciudad}.`);
    }
};
 persona.imprimirInfo();