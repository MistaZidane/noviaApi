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
// import authMiddleware from "../middlewares/authMiddleware";



const router = express.Router();

router.get("/courses/", controller.getCoursesController);
router.get("/courses/:id", controller.getCoursesByIdController);
router.post("/courses/", controller.createCourseControler);
router.patch("/courses/:id", controller.updateCourseController);
router.delete("/courses/:id", controller.deleteCourseController)

export default router;