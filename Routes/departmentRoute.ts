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

router.get("/department/", controller.getDepartmentController);
router.get("/department/:id", controller.getDepartmentByIdController);
router.post("/department/", controller.createDepartmentControler);
router.patch("/department/:id", controller.updatedepartmentController);
router.delete("/department/:id", controller.deleteDepartmentController)

export default router;