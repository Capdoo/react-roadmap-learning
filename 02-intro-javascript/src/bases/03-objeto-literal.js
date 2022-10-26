
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