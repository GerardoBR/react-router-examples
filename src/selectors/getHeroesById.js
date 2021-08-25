import {heroes} from '../data/heroes';
// import React from 'react'

export const getHeroesById = ( id ) => {

    return heroes.find(  heroes =>heroes.id === id );
    
}
