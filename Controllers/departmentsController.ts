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
import messages from "../messages/messages";


import path from "path"
import mongoosePaginate = require('mongoose-paginate-v2');
import departmentModel from "../Models/departmentsModel";
/**
 * 
 * used to create a department
 *  @param req - request object
 *  @param res - response object
 */
const createDepartment = (req: any, res: any) => {
    departmentModel.create(req.body).then((data) => {
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
 * used to get departments
 *  @param req - request object
 *  @param res - response object
 */
// 603eb2ee77259abd63745b4d
const getDepartments = (req: any, res: any) => {
    const options = {
        page: req.query.page ? req.query.page : 1,
        limit: req.query.limit ? req.query.limit : 10,
    };
    departmentModel.find().populate('campus').exec((err,data)=>{
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
    // departmentModel.find((err,data)=>{
    //   if(!err){
    //              console.log(data)
    //         res.status(response.OK_200);
    //         res.json({
    //             success: true,
    //             docs: data
    //         });
    //   }
    //   else{
    //     res.status(response.BAD_REQUEST_400);
    //             console.log(err)
    //             res.json({
    //                 success: false,
    //                 docs: []
    //             })
    //   }
    // });


};


/**
 * 
 * used to get a cours by id
 *  @param req - request object
 *  @param res - response object
 */
// 603eb2ee77259abd63745b4d
const getDepartmentById = (req: any, res: any) => {
  let id = req.params.id ? req.params.id : '';
  const options = {
      page: req.query.page ? req.query.page : 1,
      limit: req.query.limit ? req.query.limit : 10,
  };
  
  departmentModel.findById(id).populate('campus').exec((err,data)=>{
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
 * used to update a department
 *  @param req - request object
 *  @param res - response object
 */
const updateADepartment = (req: any, res: any) => {
    let id = req.params.id ? req.params.id : '';

    let updateData = req.body;
    departmentModel.findOneAndUpdate({ _id: id}, updateData, { new: true }, (err, doc) => {
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
/**
 * 
 * used to delete a department
 *  @param req - request object
 *  @param res - response object
 */
 const deleteDepartment = (req: any, res: any) => {
    // setting the id of the department if passed to {id}
    let id = req.params.id ? req.params.id : '';
   
    // deleting the department where {id} 
    departmentModel.deleteOne({ _id: id }).then(val => {
        // department deleted
        let docCount = val.deletedCount;
        let responsMessage = docCount ? "Delleted document" : "Document Not found";
        res.status(response.OK_200);
        res.json({
            success: true,
            deletedCount: docCount,
            message: responsMessage
        })
      
    }).catch(err => {
        // department not deleted
        res.status(response.NO_CONTENT_204);
        res.json({
            success: false,
            message: "Error occured"
        })
    })

};



export default {
  getDepartments,
  getDepartmentById,
  createDepartment,
  updateADepartment,
  deleteDepartment
};

