import { request, response } from 'express';


export const validarPassword = async( req = request, res = response, next: () => void ) => {

    const password: string = req.body.password;
        
    if( password === "" || password !== undefined ) {
        if( password.length < 8 ) {
            return res.json({ msg: 'La contraseña debe ser minimo de 8 caracteres'})
        } 
    }

    next();


}

    
    