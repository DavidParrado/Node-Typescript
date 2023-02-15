import mongoose from "mongoose";

export const dbConnection = async() => {

    try {
        mongoose.connect(`mongodb+srv://davidparrado:Grimaldo1@cluster0.501pthq.mongodb.net/test`, () => {
            console.log('Base de datos online');
        });
    
    } catch ( error ) {
        throw new Error( error as string );
    }
        
}





