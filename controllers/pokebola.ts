import { Request, Response } from 'express';
import { AuthInterface, Params } from '../middlewares/validarjwt';
import { traerPokemon } from '../helpers/traer-pokemon';
import { IPokemon } from '../classes/pokebola';
import Usuario from '../classes/usuario';
import Pokebola from '../classes/pokebola';

export const mostrarPokebola = async( req: Request, res: Response ) => {

    const { userId }: Params = req.params;

    const pokebola = await Pokebola.findOne({ userId, status: true });
    return res.json( pokebola );

}

export const mostrarPokebolas = async( req: AuthInterface, res: Response ) => {

    const { idAutenticado } = req;

    const usuario = await Usuario.findById( idAutenticado );
    if( !usuario ) { return res.json({ msg: 'No existe un usuario con ese id'})};
    if( usuario.rol !== 'ADMIN' ) {
        return res.json({ msg: 'No puedes acceder a esta ruta debes ser Admin'});
    }
    const pokebola = await Pokebola.find({ status: true });
    return res.json( pokebola );

}



export const crearPokebola = async( req: Request, res: Response ) => {

    const { userId }: Params = req.params;
    

    const usuario = await Pokebola.findOne({ userId, status: true });
    
    if( usuario ) { 
        return res.json({ msg: 'Este usuario ya tiene una pokebola registrada'})
    }

    const pokebola = new Pokebola({ userId , pokemones: [] });
    pokebola.save()

    res.json( pokebola );
}
export const eliminarPokebola = async( req: Request, res: Response ) => {


    const { userId }: Params = req.params;
    

    const usuario = await Pokebola.findOne({ userId, status: true });
    if( !usuario ) { return res.json({ msg: 'El usuario no tiene pokebola para eliminar'}) };
    
    const pokebola = await Pokebola.findByIdAndUpdate( usuario.id, { status: false }, { new: true} );
    if( !pokebola ) { return res.json({ msg: 'La pokebola no existe'}) }
    
    res.json( pokebola );
}



export const agregarPokemon = async( req: Request, res: Response ) => {
    
    const { userId, pokemonId }: Params = req.params;
    
    const pokebola = await Pokebola.findOne({ userId });
    
    if( !pokebola ) { return res.json({ msg: 'El usuario ingresado no tiene una pokebola registrada'})};
    if( Number( pokemonId ) > 1008 ) { return res.json({ msg: 'No existe un pokemon con ese id'})} ;
    
    const pokemon: IPokemon = await traerPokemon( pokemonId );
    
    const pokemones: IPokemon[] = pokebola.pokemones;
    if( pokemones.length >= 10 ) {
        return res.json({ msg: 'Lo siento has llegado al maximo de pokemones, para poder agregar uno nuevo debes eliminar uno'});
    }
    
    pokemones.push( pokemon );
    pokebola.save()

    return res.json( pokebola )

}

export const eliminarPokemon = async( req: AuthInterface, res: Response ) => {

    const { pokemonId, userId }: Params = req.params;

    const pokebola = await Pokebola.findOne({ userId });

    if( !pokebola ) { return res.json({ msg: 'El usuario ingresado no tiene una pokebola registrada'})};
    


    const pokemones: IPokemon[] = pokebola.pokemones;
    const pokemon: number = pokemones.findIndex( (pokemon: { id: number; } ) => pokemon.id === Number(pokemonId) )
    
    if( pokemon >= 0 ) {
        pokemones.splice( pokemon, 1 )
    } else { 
        return res.json({ msg: 'No existe ese pokemon dentro de la pokebola'});
    }
    
    pokebola.save();


    res.json({ msg: `El pokemon con id ${ pokemonId } ha sido eliminado exitosamente`, pokemon, pokebola });
}