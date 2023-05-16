// Funciones JS

function mensaje(cadena = ''){
    return cadena;
}

console.log( mensaje('Hola Mundo') );

mensaje = 50;



const mensaje1 = function(cadena = ''){
    return cadena;
}
const mensaje2 = (cadena = '') => {
    return cadena;
}

console.log(mensaje);
console.log( mensaje1 );
console.log( mensaje2 );


const mensaje3 = () => ({
  id: 1,
  nick: 'admin'  
})


console.log(mensaje3());
