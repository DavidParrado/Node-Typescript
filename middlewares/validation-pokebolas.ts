import { validarJwt } from './validarjwt';
import { check } from 'express-validator';
import { existeId } from './validaciones';
import { validarErrores } from './validation-error';
import { validarIdPokemon } from '../helpers/validar-id-pokemon';




export const validarCrearPokebola = () => {
    return [
        validarJwt,
        check('userId').isMongoId().withMessage('No es un id de mongo valido').custom( existeId ),
        validarErrores
    ]
}

export const validarIncluirPokemon = () => {
    return [
        validarJwt,
        validarIdPokemon,
        check('userId').isMongoId().withMessage('No es un id de mongo valido').custom( existeId ),
        validarErrores
    ]
}

export const validarEliminarPokebola = () => {
    return [
        validarJwt,
        check('userId').isMongoId().withMessage('No es un id de mongo valido').custom( existeId ),
        validarErrores
    ]
}

export const validarEliminarPokemon = () => {
    return [
        validarJwt,
        check('userId').isMongoId().withMessage('No es un id de mongo valido').custom( existeId ),
        validarErrores
    ]
}

