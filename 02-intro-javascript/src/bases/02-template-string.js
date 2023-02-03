const nombre = 'Rafael';
const apellido = 'Nontol';

//const nombreCompleto = nombre+apellido;

const nombreCompleto = ` 
    ${nombre} 
    ${apellido} 
    ${1 + 1}
    ${5 + 5}
`;

console.log(nombreCompleto);


function getSaludo(name){
    return 'Hola ' + name;
}


console.log( `Este es un texto: ${getSaludo(nombre)}` );
console.log( `Mostrar resultado: ${getSaludo("Sample")}`);
