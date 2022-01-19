/*
 * Author: Ntokungwia Zidane
 * Contributors: 
 *
 * Project: Bato Store API
 * This is used to boot up our API
 * Created on Tuesday Jan 18 2022

 */

import logger from "../logger";
import response from "../messages/response";
import messages from "../messages/messages";


import path from "path"
import mongoosePaginate = require('mongoose-paginate-v2');
import CampusModel from "../Models/campusModel";
/**
 * 
 * used to create a course
 *  @param req - request object
 *  @param res - response object
 */
const createCampus = (req: any, res: any) => {
    CampusModel.create(req.body).then((data) => {
        res.status(response.CREATED_201);
        res.json({
            success: true,
            docs: data
        });
    }).catch(err => {
        res.status(response.BAD_REQUEST_400);
        res.json({
            success: false,
            docs: []
        })
    })

};


/**
 * 
 * used to get courses
 *  @param req - request object
 *  @param res - response object
 */
// 603eb2ee77259abd63745b4d
const getCampus = (req: any, res: any) => {
    const options = {
        page: req.query.page ? req.query.page : 1,
        limit: req.query.limit ? req.query.limit : 10,
    };
    
    CampusModel.find((err,data)=>{
      if(!err){
                 console.log(data)
            res.status(response.OK_200);
            res.json({
                success: true,
                docs: data
            });
      }
      else{
        res.status(response.BAD_REQUEST_400);
                console.log(err)
                res.json({
                    success: false,
                    docs: []
                })
      }
    });


};


/**
 * 
 * used to get a cours by id
 *  @param req - request object
 *  @param res - response object
 */
// 603eb2ee77259abd63745b4d
const getCampusById = (req: any, res: any) => {
  let id = req.params.id ? req.params.id : '';
  const options = {
      page: req.query.page ? req.query.page : 1,
      limit: req.query.limit ? req.query.limit : 10,
  };
  
  CampusModel.findById(id,(err,data)=>{
    if(!err){
               console.log(data)
          res.status(response.OK_200);
          res.json({
              success: true,
              docs: data
          });
    }
    else{
      res.status(response.BAD_REQUEST_400);
              console.log(err)
              res.json({
                  success: false,
                  docs: []
              })
    }
  });


};
/**
 * 
 * used to update a course
 *  @param req - request object
 *  @param res - response object
 */
const updateACampus = (req: any, res: any) => {
    let id = req.params.id ? req.params.id : '';

    let updateData = req.body;
    CampusModel.findOneAndUpdate({ _id: id}, updateData, { new: true }, (err, doc) => {
        if (err) {
            res.status(response.BAD_REQUEST_400);
            res.json({
                success: false,
                docs: []
            })
        }
        else {
            res.status(response.OK_200);
            res.json({
                success: true,
                docs: doc,
                message: "Updated Successfully"
            });
        }
    })
};



export default {
  getCampus,
  getCampusById,
  createCampus,
  updateACampus
};

