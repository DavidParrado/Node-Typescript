
import { validationResult, body, check } from 'express-validator';
import { request, response } from 'express';

import { verificarEmail, validarNombre, verificarRol, validarPassword } from '../helpers/index'
import { validarEmail, existeId } from './validaciones';
import { validarJwt } from './validarjwt';


export const validarErrores = async( req = request, res = response, next: () => void  ) => {
    const errors = validationResult( req );
    if( !errors.isEmpty() ) { 
        return res.json( errors );
    }

    next()
}


export const validarCrearUsuario = () => {
    return [
        body('nombre').notEmpty().withMessage('El campo nombre es obligatorio').isString().withMessage('Este campo solo recibe texto'), 
        body('email').notEmpty().withMessage('El campo email es obligatorio').isEmail().withMessage('No es un email valido').custom( validarEmail ),
        body('rol').notEmpty().withMessage('El campo rol es obligatorio').isIn(['ADMIN','MAESTROPOKEMON']).withMessage('No es un rol válido'),
        body('password').notEmpty().withMessage('El campo password es obligatorio').isLength({ min: 8 }).withMessage('La contraseña debe ser mayor a 8 caracteres'),
        validarErrores
    ]
}

export const validarActualizarUsuario = () => {
    return [
        validarJwt,
        validarNombre,
        verificarEmail,
        verificarRol,
        validarPassword,
    ]
}

export const validarBuscarUsuarios = () => {
    return [
        validarJwt
    ]
}

export const validarBuscarUsuario = () => {
    return [
        check('id','No es un id de mongo válido').isMongoId(),
        check('id').custom( existeId ),
        validarJwt,
        validarErrores
    ]
}

export const validarEliminarUsuario = () => {
    return [
        check('id','No es un id de mongo válido').isMongoId(),
        check('id').custom( existeId ),
        validarJwt,
        validarErrores
    ]
}

export const autenticacion = () => {
    return [
        body('email').notEmpty().withMessage('El campo email es obligatorio').isEmail().withMessage('No es un email válido'),
        body('password').notEmpty().withMessage('El campo password es obligatorio'),
        validarErrores
    ]
}