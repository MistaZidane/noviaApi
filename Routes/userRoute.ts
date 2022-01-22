/*
 * Author: Ntokungwia Zidane
 * Contributors: 
 *
 * Project: 
 * This is used to boot up our API
 * Created on Tuesday Jan 18 2022

 */

import * as express from "express";
import controller from "../controllers";

// auth middleware
import authMiddleware from "../middlewares";



const router = express.Router();

router.post("/signup/",authMiddleware.verifySignUp, controller.createUserController);
router.post("/login/", controller.loginUserController);

export default router;