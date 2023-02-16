import { Router } from 'express';
import { crearPokebola, incluirPokemon, mostrarPokebola, eliminarPokemon, eliminarPokebola, mostrarPokebolas } from '../controllers/pokebola';
import { validarCrearPokebola, validarIncluirPokemon, validarEliminarPokebola, validarEliminarPokemon } from '../middlewares/validation-pokebolas';
import { validarJwt } from '../middlewares/validarjwt';
import { validarErrores } from '../middlewares/validation-error';

export const router = Router();

router.get('/', [ validarJwt, validarErrores ] ,mostrarPokebolas )

router.get('/:userId', mostrarPokebola )

router.post('/:userId', validarCrearPokebola() , crearPokebola );

router.put('/:userId/:pokemonId', validarIncluirPokemon() , incluirPokemon );

router.delete('/:userId', validarEliminarPokebola() , eliminarPokebola );

router.delete('/:userId/pokemonId', validarEliminarPokemon() , eliminarPokemon );