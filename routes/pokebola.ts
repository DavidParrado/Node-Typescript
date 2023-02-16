import { Router } from 'express';
import { crearPokebola, agregarPokemon, mostrarPokebola, eliminarPokemon, eliminarPokebola, mostrarPokebolas } from '../controllers/pokebola';
import { validarCrearPokebola, validarIncluirPokemon, validarEliminarPokebola, validarEliminarPokemon, validarMostrarPokebolas, validarMostrarPokebola } from '../middlewares/validation-pokebolas';


export const router = Router();

router.get('/', validarMostrarPokebolas() , mostrarPokebolas );

router.get('/:userId', validarMostrarPokebola() , mostrarPokebola );

router.post('/:userId', validarCrearPokebola() , crearPokebola );

router.put('/:userId/:pokemonId', validarIncluirPokemon() , agregarPokemon );

router.delete('/:userId', validarEliminarPokebola() , eliminarPokebola );

router.delete('/:userId/:pokemonId', validarEliminarPokemon() , eliminarPokemon );