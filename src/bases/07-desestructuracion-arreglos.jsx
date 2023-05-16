// Desestructuracion de arreglos

const personajes = ['Mazinger', 'Ultraman', 'Goku', 'Pedro'];

const [,p2, , p4] = personajes;

console.log(p2, p4);

const arreglo = () => {
    return ['ABCD', 12345];
}

const [letras, numeros] = arreglo();

console.log(letras, numeros);

//Ejercicio para medio punto
const _useState = (valor) => {
    return [valor,  () => 'Esta es una funcion'];
}

const [nombre, getMensaje] = _useState(10);

console.log(nombre, getMensaje());

