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

router.get("/unassigned/", controller.getUnassignedController);
router.get("/unassigned/:id", controller.getUnassignedByIdController);
router.post("/unassigned/", controller.createUnassignedControler);
router.patch("/unassigned/:id", controller.updateUnassignedController);
router.delete("/unassigned/:id", controller.deleteUnassignedController);

export default router;