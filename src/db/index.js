//using mongoose to connect to database 
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

 
//purely database connect 
const connectDB = async () => {
    try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`\n MondoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MONGODB connection error ", error);
        process.exit(1) 
    }
}

export default connectDB