import { request, response } from "express"
import Usuario from '../classes/usuario';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

export interface payload{ 
    id: string
}

export const login = async( req = request, res = response ) => {

    const { email, password } = req.body;

    const usuario = await Usuario.findOne({ email, status: true });
    if( !usuario ) { 
        return res.status(404).json({ msg: 'El email no se encuentra registrado'});
    }
    if( !bcryptjs.compareSync( password , usuario.password ) ) {
        return res.status(404).json({ msg: 'Contraseña incorrecta'})
    }

    const payload: payload = { id: usuario.id }
    
    const token: string = jwt.sign( payload, (process.env.SECRETKEY as string), {
        expiresIn: '4h'
    })

    res.status(200).send({ msg: 'Inicio de sesión exitoso', token });
}