import Usuario from '../classes/usuario';

// CUSTOM VALIDATORS
export const validarEmail = async( email: string ) => {
    const existeEmail = await Usuario.findOne({ email });
    if( existeEmail ) { 
        throw new Error('El correo ya esta en uso');
    }
}

export const existeId = async( id: string ) => {
    const usuario = await Usuario.findById( id );
    if( !usuario ) { 
        throw new Error('No existe un usuario con ese id')
    }
}



