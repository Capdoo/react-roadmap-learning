// const myArray = new Array();
// console.log(myArray);

const single = [1,2,3,4];
//single.push(11);
console.log(single);

const nuevo = [...single, 5];
console.log(nuevo);

//No copia referencia, crea nuevo objeto
const another = nuevo.map(
    algo => {
        console.log(algo);
        return algo+2;
    }
);
console.log(another);










/*


// const arreglo = new Array( 100 );
const arreglo = [1,2,3,4];
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);

// let arreglo2 = [arreglo, 5];
let arreglo2 = [ ... arreglo ]
arreglo2.push( 5 );

const arreglo3 = arreglo2.map( function (x){
    return x * 2;
});



console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);

*/