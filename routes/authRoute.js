import express from "express";
import { registerController, loginController } from "../controllers/authController.js"

//route Object
const route = express.Router();

//routing
//REGISTER || METHOD POST
route.post('/register', registerController)

//Login || METHOD POST 
route.post('/login', loginController)
export default route;