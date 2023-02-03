//Funcion en js

const saludar = function (nombre){
    return `Hola ${nombre}`
}

const comer = (alimento) => {
    return `Comiendo ${alimento}`
}

const comerSimplificado = (alimento) => `Comiendo ${alimento}`;

const mundo = () => 'Hola mundo';

const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'El_papi1222',
    }
}

//Retornando un objeto
const getUser2 = () => (
    {
        uid: 'ABC123',
        username: 'El_papi1222',
    }
)

const user = getUser2();

//saludar = 30

//console.log(saludar('Rafael'))
console.log(saludar)
console.log(comer('Tamales'))
console.log(comerSimplificado('Tamales'))
console.log(mundo())
console.log(getUser())
console.log(user);

//Tarea
//1 . Transformar a funcion de flecha
//2 . Retornar un objeto implicito
//3 . Probar
function getUsuarioActivo(nombre){
    return {
        uid: 'ABC1223232',
        username: nombre,
    }
};

const sol = (nombre) => ({
    uid: 'ABC1223232',
    username: nombre,
});

const usuarioActivo = getUsuarioActivo('Santiago');
console.log(usuarioActivo);

const testSol = sol("Jimmy");
console.log(testSol);


//Tarea
//1 . Transformar a funcion de flecha
//2 . Retornar un objeto implicito
//3 . Probar
function getAuthKeys(key){
    return {
        uid: 'Bearer',
        master: key,
    }
};

const solKeys = (key) => ({
    uid: 'Bearer',
    master: key
});

const myKeys = getAuthKeys('0009909');
console.log(myKeys);

const myKeysSol = solKeys('0009909');
console.log(myKeysSol); 