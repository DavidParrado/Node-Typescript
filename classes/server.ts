import express, { Express } from 'express';
import { dbConnection } from '../db/mongoose';
import { router as routerUsuarios } from '../routes/usuarios';
import { router as routerAuth } from '../routes/auth';
import { router as routerPokemon } from '../routes/pokemon';

export class Server { 
    private app: Express;
    private paths;
    constructor() { 

        this.app = express();
        this.paths = { 
            usuarios:   '/api/usuarios',
            pokemon:  '/pokemon',
            auth:      '/auth',
        }


        this.connection()
        this.middlewares()
        this.routes()

    }

    async connection() { 
        await dbConnection()
    }
    
    middlewares() { 
        this.app.use( express.json() );
    }
    
    
    routes() { 
        this.app.use( this.paths.usuarios, routerUsuarios );
        this.app.use( this.paths.auth, routerAuth );
        this.app.use( this.paths.pokemon, routerPokemon );
    }
    
    listen() { 
        this.app.listen( process.env.PORT, () => {
            console.log(`Servidor corriendo en el puerto 8080`);
        })
    }
}

