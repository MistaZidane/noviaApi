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

router.get("/seating/",authMiddleware.authJwt.default.verifyToken, controller.getSeatingController);
router.get("/seating/:id",authMiddleware.authJwt.default.verifyToken, controller.getSeatingByIdController);
router.post("/seating/",authMiddleware.authJwt.default.verifyToken, controller.createSeatingControler);
router.patch("/seating/:id",authMiddleware.authJwt.default.verifyToken, controller.updateSeatingController);
router.delete("/seating/:id",authMiddleware.authJwt.default.verifyToken, controller.deleteSeatingController);

export default router;