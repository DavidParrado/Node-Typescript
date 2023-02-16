import { validarJwt } from './validarjwt';
import { check } from 'express-validator';
import { existeId } from './validaciones';
import { validarErrores } from './validation-error';
import { validarIdPokemon } from '../helpers/validar-id-pokemon';
import { validarRoles } from './rol-admin-maestro';
import { esAdmin } from './rol-admin';


export const validarMostrarPokebolas = () => {
    return [
        validarJwt,
        esAdmin,
        validarErrores
    ]
}

export const validarMostrarPokebola = () => {
    return [
        validarJwt,
        validarRoles,
        validarErrores
    ]
}

export const validarCrearPokebola = () => {
    return [
        validarJwt,
        check('userId').isMongoId().withMessage('No es un id de mongo valido').custom( existeId ),
        validarRoles,
        validarErrores
    ]
}

export const validarIncluirPokemon = () => {
    return [
        validarJwt,
        validarIdPokemon,
        check('pokemonId').isNumeric().withMessage('Este valor tiene que ser necesariamente un numero'),
        check('userId').isMongoId().withMessage('No es un id de mongo valido').custom( existeId ),
        validarRoles,
        validarErrores
    ]
}

export const validarEliminarPokebola = () => {
    return [
        validarJwt,
        check('userId').isMongoId().withMessage('No es un id de mongo valido').custom( existeId ),
        validarRoles,
        validarErrores
    ]
}

export const validarEliminarPokemon = () => {
    return [
        validarJwt,
        check('userId').isMongoId().withMessage('No es un id de mongo valido').custom( existeId ),
        validarRoles,
        validarErrores
    ]
}

