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

router.get("/courses/",authMiddleware.authJwt.default.verifyToken, controller.getCoursesController);
router.get("/courses/:id",authMiddleware.authJwt.default.verifyToken, controller.getCoursesByIdController);
router.post("/courses/",authMiddleware.authJwt.default.verifyToken, controller.createCourseControler);
router.patch("/courses/:id",authMiddleware.authJwt.default.verifyToken, controller.updateCourseController);
router.delete("/courses/:id",authMiddleware.authJwt.default.verifyToken, controller.deleteCourseController)

export default router;