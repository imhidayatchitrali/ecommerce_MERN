import express from 'express';
import color from "colors";
import morgan from 'morgan';
import dotenv from "dotenv";
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js'

///config dotenv
dotenv.config()


//database config
connectDB();

//rest Object
const app = express()

//middlewares
app.use(express.json())
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes)

///rest api
app.get('/', (req, res) => {
    res.send("<h1>Welcome to Ecommerce App</h1>");
})

const PORT = 8081;
app.listen(PORT, () => {
    console.log(`server runing on port ${PORT}`.bgGreen.white);
})