//Declaración normal de funciones

function saludar() {
    console.log("Hola");
}

//La llamada a esta funcion puede dar error si tenemos una varible con el mismo nombre
//var saludar = 123;
saludar(); //Daria error porque saludar no es funcion
//let saludar = 123; //Daria error porque saludar ya está definido

//Funciones anonimas
const saludar3 = function () { //Al ponerla como const, ya no hay problema de editar su valor
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

//================ PRO-TIP 1 ================
//Si tenemos esta funcion
function crearPersona(nombre, apellido) {
    return {
        nombre: nombre,
        apellido: apellido
    };
}
//Vamos a reducir esta función pero simplificandola
//Queremos devolver algo en un objeto donde el nombre de la propiedad es igual el nombre de la variable
function crearPersona2(nombre, apellido) {
    return {
        nombre,
        apellido
    }; //Con esto sirve
}
//Si queremos hacerlo como funcion de flecha no podemos hacerlo asi
const crearPersona3 = (nombre, apellido) => {nombre, apellido};
//porque interpreta las {} como inicio y fin de codigo, con logica entre medias. Para devolver eso como objeto, hay que hacer
const crearPersona4 = (nombre, apellido) => ({nombre, apellido});

//================ PRO-TIP 2 ================
// Usar arguments en arrow functions

//Por defecto las arrow functions no permiten usar "arguments"
function printArguments() {
    console.log(arguments);
}
//Si lo queremos hacer como flecha 
const printArguments2 = () => {
    console.log(arguments);
} //Da error

    
const printArguments3 = (args) => {
console.log(args);
} //Si ponemos esto, nos devuelve solo el primer elemento de arguments

const printArguments4 = (...args) => {
    console.log(args);
    } //Si ponemos esto, nos devuelve todos los argumentos 

//Podemos devolver el primer arg con un nombre y los demas como args
const printArguments5 = (edad, ...args) => {
    console.log({edad, args});
    } 

console.log(printArguments5(10, false, "hola"))
//{"edad": 10, "args": [false,"hola"]}

//================ PRO-TIP 3 ================
//Asociar a una variable cada uno de los elementos de un return
const returnArgs = (...args) => {
    return args;
}
const [casado, vivo, nombre] = returnArgs(true, true, "juan");
console.log({casado, vivo, nombre});