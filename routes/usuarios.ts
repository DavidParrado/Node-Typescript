import { Router } from "express";

import { usuariosDelete, usuariosGet, usuarioGet, usuariosPost, usuariosPut } from "../controllers/usuarios";
import { validarCrearUsuario, validarActualizarUsuario, validarEliminarUsuario, validarBuscarUsuario, validarBuscarUsuarios } from '../middlewares/validation-error';
export const router = Router();


router.get('/', validarBuscarUsuarios() , usuariosGet );

router.get('/:id', validarBuscarUsuario() , usuarioGet );

router.post('/', validarCrearUsuario() , usuariosPost );

router.put('/:id', validarActualizarUsuario() , usuariosPut );

router.delete('/:id', validarEliminarUsuario() , usuariosDelete );


