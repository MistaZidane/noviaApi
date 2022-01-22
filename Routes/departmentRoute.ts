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

router.get("/department/",authMiddleware.authJwt.default.verifyToken, controller.getDepartmentController);
router.get("/department/:id",authMiddleware.authJwt.default.verifyToken, controller.getDepartmentByIdController);
router.post("/department/",authMiddleware.authJwt.default.verifyToken, controller.createDepartmentControler);
router.patch("/department/:id",authMiddleware.authJwt.default.verifyToken, controller.updatedepartmentController);
router.delete("/department/:id",authMiddleware.authJwt.default.verifyToken, controller.deleteDepartmentController)

export default router;