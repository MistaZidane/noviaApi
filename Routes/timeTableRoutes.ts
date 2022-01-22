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

router.get("/table/",authMiddleware.authJwt.default.verifyToken, controller.getTimeTableController);
router.get("/table/:id",authMiddleware.authJwt.default.verifyToken, controller.getTimeTableByIdController);
router.post("/table/",authMiddleware.authJwt.default.verifyToken, controller.createTimeTableControler);
router.patch("/table/:id",authMiddleware.authJwt.default.verifyToken, controller.updateTimeTableController);
router.delete("/table/:id",authMiddleware.authJwt.default.verifyToken, controller.deleteTimeTableController);

export default router;