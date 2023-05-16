// Aync Await
import { getHeroeById } from './bases/08-importacion';

const getHeroeByIdAsync = (id) => new Promise((resolve, reject) => {
    setTimeout(()=>{
        const heroe = getHeroeById(id);
        if(!heroe) reject('El heroe no existe');
        resolve(heroe);
    }, 1000);
});

const getHeroeByIdAsync2 = async (id) => {
    try {
        const heroe = await getHeroeByIdAsync(id);
        console.log(heroe);
    } catch (error) {
        console.log(error);        
    }
}

getHeroeByIdAsync2(2);