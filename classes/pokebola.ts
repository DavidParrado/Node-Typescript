import { Schema, model } from 'mongoose';


const PokebolaSchema = new Schema({
    pokebola: []
})

export = model('pokebolas', PokebolaSchema);



