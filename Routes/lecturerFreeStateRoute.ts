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

router.post("/lecturer-free/",authMiddleware.authJwt.default.verifyToken,controller.createLecturerFreeStateController);
router.get("/lecturer-free/",authMiddleware.authJwt.default.verifyToken, controller.getLecturerFreeStateController);
router.get("/lecturer-free/:id",authMiddleware.authJwt.default.verifyToken, controller.getLecturerFreeStateByIdController);
router.patch("/lecturer-free/",authMiddleware.authJwt.default.verifyToken, controller.updateLecturerFreeStateController);
router.delete("/lecturer-free/:id",authMiddleware.authJwt.default.verifyToken, controller.deleteLecturerFreeStateController);

export default router;