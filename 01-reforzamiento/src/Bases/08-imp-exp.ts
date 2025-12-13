
//*08 IMPORTACIONES Y EXPORTACIONES */

import { heroes as myfavHeroes, Owner, type Hero, heroes } from '../data/heroes.data';

const getHeroById = (id: number): Hero|undefined => {

    const hero = myfavHeroes.find((hero) => {
        return hero.id === id; 
    });

if(!hero){
    throw new Error(`No existe un heroe con el id ${id}`);
}

    return hero;

};

console.log(getHeroById(1));


//* TAREA

export const getHeroesByOwner = (owner: Owner)=>{

    const heroesByOwner = heroes.filter(
        hero => hero.owner === owner
    )

    return heroesByOwner;
};