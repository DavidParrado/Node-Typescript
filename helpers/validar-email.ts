import { response, request } from 'express';
import Usuario from '../classes/usuario';
import { AuthInterface } from '../middlewares/validarjwt';





export const verificarEmail = async( req = request, res = response, next: () => void ) => {
    const { id } = req.params;
    const email: string = req.body.email;
    const usuario = await Usuario.findById( id );

    if( email === "" ) { 
        return res.json({ msg: 'El campo email esta vacio'});
    } 
    
    if( email !== undefined ){ 
        const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if( !email.match( re ) ) { 
            return res.json({ msg: 'El correo no es valido'});
        }

        const emailExiste = await Usuario.findOne({ email });
        if( emailExiste && usuario?.email !== email ) { 
            return res.json({ msg: `Lo sentimos el correo ${ email } ya está en uso`});
        }
    }

    next();
    
}