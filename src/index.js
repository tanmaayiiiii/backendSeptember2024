// require('dotenv').config({path: './.env'}) //works fine, run hoga,  but inconsistent
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: './.env'
})

 
connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on PORT ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO DB connection failed !!!", err)
})




















//first approach
/*
import express from "express"
const app = express()

// function connectDB() {}
// connectDB()
//better way to do this  

//IFFE

//database connection
;( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) //takig variable from .env file
        
        //listener
        app.on("error", (error) => {
            console.log("ERROR: express application not able to talk to DB : " , error);   
            throw error 
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on por ${process.env.PORT}`)
        })

    } catch (error) {
        console.error("ERROR: ", errors)
        throw error
    }
})()
    */