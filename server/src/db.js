import mongoose from "mongoose"
import dotenv from "dotenv"
(dotenv).config({path:"variable.env"})


export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_Mongo,{
            useNewUrlParser:true,
            useUnifiedTopology: true
        });
        console.log("DB Conectada con exito")
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
