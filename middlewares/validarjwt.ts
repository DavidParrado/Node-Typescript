import { request, Request , response } from 'express';
import jwt from 'jsonwebtoken';
import Usuario from '../classes/usuario';

export interface AuthInterface extends Request { 
    idAutenticado?: string
}


export const validarJwt = async( req:AuthInterface , res = response, next: () => void ) => {

    const { id, userId } = req.params;
    const { token } = req.headers;
    
    if( !token ) return res.json({ msg: 'No existe token en los headers de la petición'}) 
    
    if( id || userId ) { 
    
        const usuario = await Usuario.findById( id || userId );
        const payload = jwt.verify( <string>token , process.env.SECRETKEY!, ( err, decode ) =>  ( decode !== undefined ) ? decode : err );
        const usuarioAutenticado = await Usuario.findById((<any>payload).id );

        if( (<any>payload).id !== usuario?.id &&  usuarioAutenticado?.rol !== 'ADMIN') { 
            return res.json({ msg: 'Token no valido, no coincide el id autenticado con el id en el parametro'});
        }

        req.idAutenticado = (<any>payload).id
    } else { 

        const payload = jwt.verify( <string>token , process.env.SECRETKEY!, ( err, decode ) =>  ( decode !== undefined ) ? decode : err );
        const usuario = await Usuario.findById((<any>payload).id);
        const usuarioAutenticado = await Usuario.findById((<any>payload).id );
        
        if( (<any>payload).id !== usuario?.id && usuarioAutenticado?.rol !== 'ADMIN') { 
            return res.json({ msg: 'Token no valido'});
        }
        req.idAutenticado = (<any>payload).id
    }
    next()

}