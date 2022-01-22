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
// import authMiddleware from "../middlewares";



const router = express.Router();

router.post("/email/",controller.createEmailControler);
router.post("/send-mail/",controller.sendMailController);
router.get("/email/", controller.getEmailsController);
router.patch("/email/", controller.updateEmailController);
router.delete("/email/:id", controller.deleteEmailController);

export default router;