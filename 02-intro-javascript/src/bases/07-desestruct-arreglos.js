const personajes = ['june','johnny','jerry']

const [first, second, third] = personajes;
const [, segundo, tercero] = personajes;


console.log(first, second, third)
console.log(segundo, tercero)

const returnArray = () => {
    return ['ABC', 123]
};

const arr = returnArray();
console.log(arr);
const [p1, p2] = returnArray();
console.log(p1, p2)

//Tarea
//1. El primer valor del array se llamara nombre
//2. El segundo se llamara setNombre
const funcTarea = (valor) => {
    return [valor, ()=>{console.log('HolaMundo')}];
};

const arr2 = funcTarea('Goku');
console.log(arr2);
arr2[1]();

const [nombre, setNombre] = funcTarea('Johnny Cash');
console.log(nombre);
setNombre();


