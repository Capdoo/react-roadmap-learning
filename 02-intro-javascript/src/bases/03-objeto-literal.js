
const persona0 = {
    longitud: 12,
    ancho:22,
    profundidad:1,
    subsection:{
        front:"zip",
        back:"load"
    }
}

console.log(persona0);
console.log(persona0.longitud);

//Creacion de un objeto cuya propiedad sea persona0
const nuevoObjeto = {propiedad: persona0, propiedad1: persona0};
console.log(nuevoObjeto);
console.table(nuevoObjeto);

//Copiar objeto : es copiar la referencia
//No usar nunca
//const otroObjecto = persona0;
//otroObjecto.ancho = 900

//En su lugar usar spread (...)
//Es un clon del objeto
const remoteObject = { ...persona0 };
remoteObject.ancho = 900
console.log(persona0);
//console.log(otroObjecto);
console.log(remoteObject);






const persona = {

    nombre : 'Tony',
    apellido : 'Stark',
    edad: 45,
    ciudad: {
        ciudad: 'New York',
        zip: 232323,
        lat: 333.33,
        lng: 22.2,
    }
};

console.log( {persona} );
//console.log( {persona : persona} );

// console.table( persona );


//Solo la referencia
//const persona2 = persona;

//Hacer un clon del objeto
const persona2 = {... persona};
persona2.nombre = 'Peter';

console.log(persona)
console.log(persona2)