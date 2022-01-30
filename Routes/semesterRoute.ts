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

router.get("/semester/",authMiddleware.authJwt.default.verifyToken, controller.getSemestersController);
router.get("/semester/:id",authMiddleware.authJwt.default.verifyToken, controller.getSemesterByIdController);
router.post("/semester/",authMiddleware.authJwt.default.verifyToken, controller.createSemesterControler);
router.patch("/semester/:id",authMiddleware.authJwt.default.verifyToken, controller.updateSemesterController);
router.delete("/semester/:id",authMiddleware.authJwt.default.verifyToken, controller.deleteSemesterController);

export default router;