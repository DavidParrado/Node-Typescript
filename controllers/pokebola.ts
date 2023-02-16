import { Request, Response } from 'express';
import Pokebola, { IPokemon } from '../classes/pokebola';
import fetch from 'node-fetch';
import { AuthInterface } from '../middlewares/validarjwt';
import Usuario from '../classes/usuario';

export const mostrarPokebola = async( req: Request, res: Response ) => {

    const { userId } = req.params;

    const pokebola = await Pokebola.findOne({ userId });
    return res.json( pokebola );

}

export const mostrarPokebolas = async( req: AuthInterface, res: Response ) => {

    const { idAutenticado } = req;
    console.log( idAutenticado );
    const usuario = await Usuario.findById( idAutenticado );
    if( !usuario ) { return res.json({ msg: 'No existe un usuario con ese id'})};
    if( usuario.rol !== 'ADMIN' ) {
        return res.json({ msg: 'No puedes acceder a esta ruta debes ser Admin'});
    }
    const pokebola = await Pokebola.find({ status: true });
    return res.json( pokebola );

}



export const crearPokebola = async( req: Request, res: Response ) => {

    const { userId } = req.params;
    

    const usuario = await Pokebola.findOne({ userId });
    
    if( usuario ) { 
        return res.json({ msg: 'Este usuario ya tiene una pokebola registrada'})
    }

    const pokebola = new Pokebola({ userId , pokemones: [] });
    pokebola.save()

    res.json( pokebola );
}
export const eliminarPokebola = async( req: Request, res: Response ) => {


    const { userId } = req.params;
    

    const usuario = await Pokebola.findOne({ userId });
    if( !usuario ) { return res.json({ msg: 'Este usuario ya tiene una pokebola registrada'}) }
    
    const pokebola = await Pokebola.findByIdAndUpdate( usuario.id, { status: false }, { new: true} );
    if( !pokebola ) { return res.json({ msg: 'La pokebola no existe'}) }
    
    res.json( pokebola );
}


export const incluirPokemon = async( req: Request, res: Response ) => {

    const { userId, pokemonId } = req.params;

    const pokebola = await Pokebola.findOne({ userId });
    if( !pokebola ) { return res.json({ msg: 'El usuario ingresado no tiene una pokebola registrada'})};
    if( Number( pokemonId ) > 1008 ) { return res.json({ msg: 'Superaste el limite'})} ;
    
    
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${ pokemonId }`);
    const { name, id,  pal_park_encounters, capture_rate, color, habitat, egg_groups } = await resp.json();
    const [{ base_score }] = pal_park_encounters;
    const pokemon = { name, id, capture_rate, base_score, color, habitat, egg_groups }

    pokebola.pokemones.push( pokemon );
    pokebola.save()
    return res.json( pokebola )




}

export const eliminarPokemon = async( req: AuthInterface, res: Response ) => {


    const { idAutenticado } = req;
    const pokebola = await Pokebola.findOne({ userId: idAutenticado });




    res.json( pokebola );
}