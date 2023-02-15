import { model, Schema } from "mongoose";

const usuarioSchema = new Schema({
    nombre: {
        type: String, 
        required: [ true, 'El nombre es obligatorio' ] 
    },
    email: {
        type: String, 
        unique: true, 
        required: [ true, 'El email es obligatorio' ], 
        match:  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    },
    password: {
        type: String, 
        required: [ true, 'El password es obligatorio' ]
    },
    rol: { 
        type: String,
        required: [ true, 'El rol es obligatorio']
    },
    status: { 
        type: Boolean,
        default: true
    }
});


export = model('Usuarios', usuarioSchema );
