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

// router.post("/create-product/", authMiddleware, controller.createproductController);
// router.post("/create-product/", productMiddleware, authMiddleware, controller.createProductController);

router.get("/get-courses/", controller.getCoursesController);

// open routes
// router.get("/get-product-by-slug/:slug", controller.getProductBySlugController);

// for variant and variants options
// router.post("/create-product-variant/:id", authMiddleware, controller.createVariantController);//done
// router.post("/create-product-variant-option/:variantId/:productId", authMiddleware, controller.createProductVariantController);//done
// router.patch("/update-product-variant-option/:id", authMiddleware, controller.updateProductVariantOptionController);//done
// router.patch("/update-product-variant/:id/:productId", authMiddleware, controller.updateProductVariantController);//done
// router.delete("/delete-product-variant/:variantId/:productId", authMiddleware,controller.deleteProductVariantController);//done
// router.delete("/delete-product-variant-option/:id/:variantId/:productId", authMiddleware, controller.deleteProductVariantOptionController);

export default router;