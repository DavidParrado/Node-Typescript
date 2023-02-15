import { request, response } from 'express';
const fetch = require('node-fetch');

export const buscarPokemon = async( req = request, res = response ) => {

    const response = await fetch('https://pokeapi.co/api/v2/');
    const result = await response.json();

    console.log( result )

    return res.json({ msg: 'pokemon'})
}