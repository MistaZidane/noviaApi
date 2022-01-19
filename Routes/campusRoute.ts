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

router.get("/campus/", controller.getCampusesController);
router.get("/campus/:id", controller.getCampusByIdController);
router.post("/campus/", controller.createCampusControler);
router.patch("/campus/:id", controller.updatecampusController);

export default router;