
// const arreglo = new Array(10)
const arreglo = [];
arreglo.push(25);

const arreglo2 = [...arreglo];
arreglo.push(50);


console.log(arreglo, arreglo2);

const arreglo3 = [0, ...arreglo, 1, 2];

console.log(arreglo3);

arreglo3.map((value) => {
    // console.log(value);
    return value * 2;
});

console.log(arreglo3);
