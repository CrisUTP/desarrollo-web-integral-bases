// Promesas en js
// Las promesas son asincronas por definicionim

import {getCompanyById, getHeroeById} from './bases/08-importacion';

const getHeroeByIdAsync = (id) => new Promise((resolve, reject) => {
    setTimeout(()=>{
        const heroe = getHeroeById(id);
        if(!heroe) reject('El heroe no existe');
        resolve(heroe);
    }, 1000);
});

const promesa = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const heroe = getHeroeById(1)
        resolve(heroe);
    }, 1000);
});

// promesa.then((heroe)=>{
//     console.log(heroe);
// });

getHeroeByIdAsync(10).then((heroe)=>{
    console.log(heroe);
}).catch( (error) => {
    console.log(error);
});