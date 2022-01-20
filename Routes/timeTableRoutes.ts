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

router.get("/table/", controller.getTimeTableController);
router.get("/table/:id", controller.getTimeTableByIdController);
router.post("/table/", controller.createTimeTableControler);
router.patch("/table/:id", controller.updateTimeTableController);
router.delete("/table/:id", controller.deleteTimeTableController);

export default router;