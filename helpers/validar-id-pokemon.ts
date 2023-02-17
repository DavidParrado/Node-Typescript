import { Request, Response, NextFunction } from 'express';
import Pokebola, { IPokemon } from '../classes/pokebola';
import { Params } from '../middlewares/validarjwt';



export const validarIdPokemon = async( req: Request, res: Response, next: NextFunction ) => {
    
    const { userId, pokemonId }: Params = req.params;
    
    const pokebola = await Pokebola.findOne({ userId });
    if( !pokebola ) { return res.json({ msg: 'El usuario no tiene ninguna pokebola registrada'})};
    
    const pokemonesIds: number[] = [];
    
    const pokemones: IPokemon[] = pokebola.pokemones;
    pokemones.forEach( (elemento: IPokemon ) => {
        pokemonesIds.push( elemento.id );
            
    });

    if( pokemonesIds.includes( Number( pokemonId ) )) {
        return res.json({ msg: `El pokemon con el id ${ pokemonId } ya se encuentra en la pokebola`});
    }


    next();

}