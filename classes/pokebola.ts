import { Schema, model } from 'mongoose';

export interface IPokemon {
    name: string;
    id: number;
    base_score: number;
    capture_rate: number;
    color: string;
    habitat: string;
    egg_groups: string;
}

const PokebolaSchema:Schema = new Schema({
    userId: { 
        type: Schema.Types.ObjectId,
        ref: 'usuarios',
        required: true
    },
    pokemones: { 
        type: Array, 
        required: true
    },
    status: {
        type: Boolean,
        default: true
    }
})

export default model('pokebolas', PokebolaSchema);



