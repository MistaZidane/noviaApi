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

router.get("/classes/",authMiddleware.authJwt.default.verifyToken, controller.getClassesController);
router.get("/classes/:campusId",authMiddleware.authJwt.default.verifyToken, controller.getClassByCampusIdController);
router.post("/classes/",authMiddleware.authJwt.default.verifyToken, controller.createClassControler);
router.patch("/classes/:id",authMiddleware.authJwt.default.verifyToken, controller.updateClassController);
router.delete("/classes/:id",authMiddleware.authJwt.default.verifyToken, controller.deleteClassController);

export default router;