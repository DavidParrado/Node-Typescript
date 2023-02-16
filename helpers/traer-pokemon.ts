import fetch from 'node-fetch';


export const traerPokemon = async( pokemonId: string ) => {

    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${ pokemonId }`);
    
    const { name, id,  pal_park_encounters, capture_rate, color, habitat, egg_groups } = await resp.json();
    let base_score = pal_park_encounters[0]?.base_score | 0;
    
    
    return { name, id, capture_rate, base_score, color, habitat, egg_groups }



}

