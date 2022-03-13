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


router.get("/open/table/", controller.getTimeTableController);
router.get("/open/table/:semesterId/:departmentId", controller.getTimeTableByIdController);
router.get("/open/seating/:semesterId",controller.getSeatingController);
router.get("/open/seating/:semesterId/:departmentId",controller.getSeatingByIdsController);
// router.get("/open/seating", controller.getLogController);

export default router;