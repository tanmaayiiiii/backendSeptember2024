import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

//configurations
app.use(express.json({limit: "16kb"}))//accepting json
app.use(express.urlencoded({extended:true,limit:"16kb"}))//to get data from url
app.use(express.static("public"))//to store pdfs, images,etc
app.use(cookieParser)


export { app }