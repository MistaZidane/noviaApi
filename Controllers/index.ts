/*
 * Author: Ntokungwia Zidane
 * Contributors: 
 *
 * Project: Bato Store API
 * This is used to boot up our API
 * Created on Tuesday Jan 18 2022

 */



import * as ordersController from "./courseController";



export default {
  
   
   
    // for orders
  
    getCoursesController: ordersController.default.getCourses,
   


   
}
