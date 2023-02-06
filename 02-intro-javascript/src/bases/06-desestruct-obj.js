//Desestructuracion
//Asignacion Desestructurante

const persona = {
    nombre: 'Rafael',
    edad: 23,
    clave: 'cyber09ll',
    rango: 'soldado',
};

//const {nombre} = persona;
const {edad, clave, nombre:nombre1,} = persona;

console.log(persona)
//console.log(nombre)
console.log(nombre1)

console.log(edad)
console.log(clave)
// console.log(persona.nombre)
// console.log(persona.edad)
// console.log(persona.clave)


const retornaPersona = (usuario) => {
    console.table(usuario);
    const {edad, nombre, clave,} = usuario;
    console.log(edad, nombre, clave)
};

//Desestructuracion en argumento
const retornaPersonaParameter = ({nombre, clave, rango = 'capitan'}) => {
    console.log(nombre, edad, rango);

};

retornaPersona(persona);
retornaPersonaParameter(persona);

const retornaPersonaObjeto = ({clave, nombre, edad, rango}) => {
    return { 
        nombreClave: clave,
        anios: edad,
    };
}

const avenger = retornaPersonaObjeto(persona);

console.table(avenger);

//Use context
const returnObjectV2 = ({clave, nombre, edad, rango}) => {
    return { 
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 12,
            long: 11,
        },
    };
}

const {nombreClave, anios, latlng:{lat, long}} = returnObjectV2(persona);
console.log(anios, nombreClave);
//console.log(latlng);
console.log(lat, long)