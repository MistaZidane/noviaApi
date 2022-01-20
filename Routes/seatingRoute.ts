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

router.get("/seating/", controller.getSeatingController);
router.get("/seating/:id", controller.getSeatingByIdController);
router.post("/seating/", controller.createSeatingControler);
router.patch("/seating/:id", controller.updateSeatingController);
router.delete("/seating/:id", controller.deleteSeatingController);

export default router;