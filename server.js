import express from 'express';
import color from "colors"
import dotenv from "dotenv"

///config dotenv
dotenv.config()

///rest Object
const app = express()


///rest api
app.get('/', (req, res) => {
    res.send("<h1>Welcome to Ecommerce App</h1>");
})

const PORT = 8081;
app.listen(PORT, () => {
    console.log(`server runing on port ${PORT}`.bgGreen.white);
})