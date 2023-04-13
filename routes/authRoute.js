import express from "express";
import { registerController } from "../controllers/authController.js"

//route Object
const route = express.Router();

//routing
//REGISTER
route.post('/register', registerController)

export default route;