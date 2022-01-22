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

router.post("/email/",authMiddleware.authJwt.default.verifyToken,controller.createEmailControler);
router.post("/send-mail/",authMiddleware.authJwt.default.verifyToken,controller.sendMailController);
router.get("/email/",authMiddleware.authJwt.default.verifyToken, controller.getEmailsController);
router.patch("/email/",authMiddleware.authJwt.default.verifyToken, controller.updateEmailController);
router.delete("/email/:id",authMiddleware.authJwt.default.verifyToken, controller.deleteEmailController);

export default router;