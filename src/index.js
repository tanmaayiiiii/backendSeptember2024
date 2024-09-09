import mongoose from "mongoose";
import { DB_NAME } from "./constants";

import express from "express"
const app = express()

// function connectDB() {}
// connectDB()
//better way to do this {lines 4-5}

//IFFE

//database connection
;( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) //takig variable from .env file
    } catch (error) {
        console.error("ERROR: ", errors)
        throw err 
    }
})()