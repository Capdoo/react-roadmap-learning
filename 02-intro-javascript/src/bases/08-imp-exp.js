//import {heroes} from './data/heroes';

import { heroes } from "../data/heroes";

import anyname, {owners} from "../data/heroes-default";

console.log(owners);

/*
const getHeroeById2 = (id) => {
    return heroes.find( (heroe) => {
        if (heroe.id == id){
            return true;
        }
    });  
};*/


const getHeroeById = (id) => {
    return heroes.find(value => value.id === id);
};

const getHeroeByOwner = (owner) => {
    const res = heroes.filter(
        (value) => value.owner === owner
    );
    return res;
};


console.log(getHeroeById(2));
console.log(getHeroeByOwner('DC'));


console.log(anyname);