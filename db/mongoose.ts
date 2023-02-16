import mongoose from "mongoose";

export const dbConnection = async() => {

    try {
        mongoose.connect(process.env.CONNECTION as string, () => {
            console.log('Base de datos online');
        });
    
    } catch ( error ) {
        throw new Error( error as string );
    }
        
}





