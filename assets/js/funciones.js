//Declaración normal de funciones

function saludar() {
    console.log("Hola");
}

//La llamada a esta funcion puede dar error si tenemos una varible con el mismo nombre
var saludar = 123;
saludar(); //Daria error porque saludar no es funcion
let saludar = 123; //Daria error porque saludar ya está definido

//Funciones anonimas
const saludar = function () { //Al ponerla como const, ya no hay problema de editar su valor
    console.log("Hola");
}

function saludar2(nombre) {
    console.log(arguments); //Con arguments nos traemos todos los parametros de la funcion
    console.log("Hola " + nombre);
}

//Lambda functions:
const saludarFlecha = (nombre) => { //No ponemos el function y usamos =>
    console.log("Hola " + nombre);
}

//Si el codigo es muy sencillo (solo un return), podemos escribir la arrow function asi
const suma = (a, b) => a + b;