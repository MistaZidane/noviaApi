/*
 * Author: Ntokungwia Zidane
 * Contributors: 
 *
 * Project: 
 * This is used to boot up our API
 * Created on Tuesday Jan 18 2022

 */

import logger from "../logger";
import response from "../messages/response";





const check = (req,res)=>{
  console.log("here**************");
  
  res.json({auth:true, message: "AUTHORIZED"});
  
}



export default {
    check

};

