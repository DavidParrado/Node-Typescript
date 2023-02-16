import { request, response } from 'express';
import bcryptjs from 'bcryptjs';
import Usuario from '../classes/usuario';
import { AuthInterface } from '../middlewares/validarjwt';

export interface usuario {
    nombre?: string,
    email?: string,
    rol?: string,
    password?: string,
    status?: boolean
}

export const usuariosGet = async( req = request, res = response ) => {

    const { limit } = req.query;


    const usuarios = await Usuario.find({ status: true })
                            .limit( Number( limit ) );

    return res.json( usuarios );
}

export const usuarioGet = async( req = request, res = response ) => {

    const { id } = req.params;
    const usuario = await Usuario.findById( id ).find({ status: true });


    return res.json( usuario );
}

export const usuariosPost = async( req = request, res = response ) => {
    
    const { nombre, email, password, rol } = req.body;
    
    const usuario = new Usuario({ nombre, email, password, rol });
    
    // Encriptación de contraseña
    const salt = bcryptjs.genSaltSync(10) 
    const hash = bcryptjs.hashSync( password, salt );
    usuario.password = hash;
    
    
    await usuario.save();
    res.json(usuario);
    
}

export const usuariosPut = async( req: AuthInterface, res = response ) => {

    const { id } = req.params;
    const { status, password, ...data } = req.body;

    if( Object.entries( req.body ).length === 0 ) return res.json({ msg: 'No hay ningun campo para actualizar'})
    
    if( password ) { 
        const salt = bcryptjs.genSaltSync(10);
        const hash = bcryptjs.hashSync(password, salt );

        data.password = hash;
    }

    
    const usuario = await Usuario.findByIdAndUpdate( id, data, { new: true } );
    
    if( !usuario || !usuario.status) { 
        return res.json({ 
            msg: 'El usuario no existe'
        })
    }
    

    return res.json( usuario );
    
}

export const usuariosDelete = async( req: AuthInterface, res = response ) => {
    
    const { id } = req.params;
    const usuario = await Usuario.findByIdAndUpdate( id, { status: false }, { new: true });
    if( !usuario ) { return res.json({ msg: `El usuario ${ id } no se encuentra en la base de datos`})};

    return res.json( usuario );


}




