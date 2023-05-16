//Importacion de recursos
import companies ,{ heroes } from '../data/heroes';



// console.log(heroes, companies);

export const getHeroeById = ( heroeId = 1 ) => {
    return heroes.find( ({id}) => id === heroeId)
}
export const getCompanyById = ( companyId = 1 ) => {
    return companies.find( ({id}) => id === companyId)
}

// console.log( getHeroeById(2) )
// console.log( getCompanyById(1) )






