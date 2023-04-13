import express from "express";
import { registerController, loginController, testController } from "../controllers/authController.js"
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//route Object
const route = express.Router();

//routing
//REGISTER || METHOD POST
route.post('/register', registerController)

//Login || METHOD POST 
route.post('/login', loginController)

//test route 
route.get('/test', requireSignIn,isAdmin, testController)
export default route;