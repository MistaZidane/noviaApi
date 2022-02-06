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

router.get("/course-in-department/",authMiddleware.authJwt.default.verifyToken, controller.getCoursesInDepartmentController);
router.get("/course-in-department/:id",authMiddleware.authJwt.default.verifyToken, controller.getCourseInDepartmentByIdController);
// router.get("/courses-by-depart/:departId",authMiddleware.authJwt.default.verifyToken, controller.getCoursesByDepartment);
router.post("/course-in-department/",authMiddleware.authJwt.default.verifyToken, controller.createCourseInDepartmentController);
router.patch("/course-in-department/:id",authMiddleware.authJwt.default.verifyToken, controller.updateCourseInDepartmenrController);
router.delete("/course-in-department/:id",authMiddleware.authJwt.default.verifyToken, controller.deleteCourseIndepartmentController)

export default router;