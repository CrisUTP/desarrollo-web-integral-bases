const persona = {
    nombre: "Cristian",
    apellido: "Rangel",
    edad: 20,
    direccion: {
       calle: "5 norte",
       no: 2134,
       colonia: 'Villa',
       municipio: 'Puebla'
    }
}
   
const persona2 = { ...persona };
persona2.edad = 50;

console.log(persona.edad);
console.log(persona2.edad);