import express, { Express } from 'express';
import { dbConnection } from '../db/mongoose';
import { router as routerUsuarios } from '../routes/usuarios';
import { router as routerAuth } from '../routes/auth';
import { router as routerPokemon } from '../routes/pokemon';
import { router as routerPokebola } from '../routes/pokebola';

export class Server { 
    private app: Express;
    private paths;
    constructor() { 

        this.app = express();
        this.paths = { 
            usuarios:   '/api/usuarios',
            pokebola:  '/pokebola',
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
        this.app.use( this.paths.pokebola, routerPokebola );
        this.app.use( this.paths.auth, routerAuth );
    }
    
    listen() { 
        this.app.listen( process.env.PORT, () => {
            console.log(`Servidor corriendo en el puerto 8080`);
        })
    }
}

