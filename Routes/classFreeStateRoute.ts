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
import authMiddleware from "../middlewares/index";



const router = express.Router();

router.post("/class-free/",authMiddleware.authJwt.default.verifyToken,controller.createClassFreeStateController);
router.get("/class-free/",authMiddleware.authJwt.default.verifyToken, controller.getClassFreeStateController);
router.get("/class-free/:id",authMiddleware.authJwt.default.verifyToken, controller.getClassFreeStateByIdController);
router.patch("/class-free/",authMiddleware.authJwt.default.verifyToken, controller.updateClassFreeStateController);
router.delete("/class-free/:id",authMiddleware.authJwt.default.verifyToken, controller.deleteClassFreeStateController);

export default router;