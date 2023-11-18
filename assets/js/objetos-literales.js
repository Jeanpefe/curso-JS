//Objeto que tiene pares de valores (key, value)
//Son como los diccionarios de python
let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman', 
};

console.log('Nombre', personaje.nombre); //Tony Stark

//Para borrar una propiedad:
delete personaje.codeName;

//Para añadir propiedad:
personaje.edad = 40;
//Para convertir el objeto literal en un array de pares
const entriesPares = Object.entries(personaje);

//Si queremos que no se puedan editar campos ni añadir/eliminar, no vale crearlo como const, eso nos evita sólo el poner personajes = 123 p.e.
//Si queremos no poder editar campos ni añadir/eliminar, usamos .freeze
Object.freeze(personaje);
personaje.edad = 123;
delete personaje.edad;
console.log(personaje); //Da edad=40 por el freeze

