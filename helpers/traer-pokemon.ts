import fetch from 'node-fetch';
import { Response } from 'node-fetch';
import { IPokemon } from '../classes/pokebola';


export const traerPokemon = async( pokemonId: string ) => {

    const resp: Response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${ pokemonId }`);
    
    const { name, id,  pal_park_encounters, capture_rate, color, habitat, egg_groups } = await resp.json();
    let base_score: number = pal_park_encounters[0]?.base_score | 0;
    
    const pokemon: IPokemon = { name, id, capture_rate, base_score, color, habitat, egg_groups };
    
    return pokemon; 


}

