/*
 * Author: Ntokungwia Zidane
 * Contributors: 
 *
 * Project: Bato Store API
 * This is used to boot up our API
 * Created on Tuesday Jan 18 2022

 */

import * as express from "express";
import controller from "../controllers";

// auth middleware
// import authMiddleware from "../middlewares/authMiddleware";



const router = express.Router();

router.get("/lecturer/", controller.getLecturersController);
router.get("/lecturer/:id", controller.getLecturerByIdController);
router.post("/lecturer/", controller.createLecturerControler);
router.patch("/lecturer/:id", controller.updateLecturerController);

export default router;