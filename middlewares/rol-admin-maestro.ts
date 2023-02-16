import { Request, Response } from "express";
import Usuario from "../classes/usuario";
import { AuthInterface } from "./validarjwt";


export const validarRoles = async( req: AuthInterface, res: Response, next: () => void ) => {

    const { idAutenticado }  = req;
    const { userId, id } = req.params;

    if( userId ) { 
    
        const usuario = await Usuario.findById( idAutenticado );
        if( !usuario ) return res.json({ msg: 'Usuario no existe'});
        
        if( usuario.rol !== 'ADMIN' && userId !== usuario.id ) { 
            return res.json({ msg:'No tienes acceso a esta ruta'});
        }
    
    }

    if( id ) { 

        const usuario = await Usuario.findById( idAutenticado );
        if( !usuario ) return res.json({ msg: 'Usuario no existe'});
        
        if( usuario.rol !== 'ADMIN' && id !== usuario.id ) { 
            return res.json({ msg:'No tienes acceso a esta ruta'});
        }
    }

    next()

}
