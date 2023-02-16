import { request, response } from 'express';
import Pokebola, { IPokemon } from '../classes/pokebola';



export const validarIdPokemon = async( req = request, res = response, next: () => void ) => {
    
    const { userId, pokemonId } = req.params;
    
    const pokebola = await Pokebola.findOne({ userId });
    if( !pokebola ) { return res.json({ msg: 'El usuario no tiene ninguna pokebola registrada'})};
    
    const pokemonesIds: number[] = [];
    
    const pokemones = pokebola.pokemones;
    pokemones.forEach( (elemento: IPokemon ) => {
        pokemonesIds.push( elemento.id );
            
    });

    if( pokemonesIds.includes( Number( pokemonId ) )) {
        return res.json({ msg: `El pokemon con el id ${ pokemonId } ya se encuentra en la pokebola`});
    }


    next();

}