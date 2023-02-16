import { Request, Response } from "express";
import Usuario from "../classes/usuario";
import { AuthInterface } from "./validarjwt";


export const esAdmin = async( req: AuthInterface, res: Response, next: () => void ) => {

    const { idAutenticado }  = req;
    if( !idAutenticado ) { 
        return res.json({ msg: 'Id Autenticado no válido'});
    }

    
    const usuario = await Usuario.findById( idAutenticado );
    if( !usuario ) return res.json({ msg: 'Usuario no existe'});
    if( usuario.rol !== 'ADMIN') { 
        return res.json({ msg:'No tienes acceso a esta ruta'});
    }
    next()

}
