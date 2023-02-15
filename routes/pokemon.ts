import { Router } from 'express';
import { buscarPokemon } from '../controllers/pokemon';


export const router = Router();


router.get('/', buscarPokemon );