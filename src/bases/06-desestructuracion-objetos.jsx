// Desestructuracion de objetos

const vehiculo = {
    anio: 2023,
    id: 123,
    marca: 'Nissan',
    modelo: 'Sentra',
};


console.log(vehiculo);

const modelo = 'March';

const { id, marca, modelo: modelo2, anio } = vehiculo;

console.log(id, marca, modelo2, anio);

const getModelo = ({modelo}) => modelo;

console.log(getModelo(vehiculo));


const usuario = {
    nickname: 'Cris',
    name: 'Cristian',
    pass: '123456',
}


const _useContext = ({ nickname, name, pass }) => {
    return {
        nombre: name,
        usuario: nickname, 
        contrasenia: pass,
        llaves: {
            publica: 'JS/$#@kls',
            privada: '123456'
        }
    }
}


const { llaves:{ privada, publica } } = _useContext(usuario);


console.table({publica, privada });








