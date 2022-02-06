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
import courseModel from "../models/courseModel";
/**
 * 
 * used to create a course
 *  @param req - request object
 *  @param res - response object
 */
const createCourse = (req: any, res: any) => {
    courseModel.create(req.body).then((data) => {
        res.status(response.CREATED_201);
        res.json({
            success: true,
            docs: data
        });
    }).catch(err => {
        res.status(response.OK_200);
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
const getCourses = (req: any, res: any) => {
    const options = {
        page: req.query.page ? req.query.page : 1,
        limit: req.query.limit ? req.query.limit : 10,
    };
    
    courseModel.find((err,data)=>{
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
const getCoursesById = (req: any, res: any) => {
  let id = req.params.id ? req.params.id : '';
  const options = {
      page: req.query.page ? req.query.page : 1,
      limit: req.query.limit ? req.query.limit : 10,
  };
  
  courseModel.findById(id,(err,data)=>{
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
const updateACourse = (req: any, res: any) => {
    let id = req.params.id ? req.params.id : '';

    let updateData = req.body;
    courseModel.findOneAndUpdate({ _id: id}, updateData, { new: true }, (err, doc) => {
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
 * used to get a coure for a specific department
 *  @param req - request object
 *  @param res - response object
 */
const getCoursesByDepartmentId = (req: any, res: any)=>{
    let id = req.params.id ? req.params.id : '';
    let departId = req.params.departId ? req.params.departId: '';
    const options = {
        page: req.query.page ? req.query.page : 1,
        limit: req.query.limit ? req.query.limit : 10,
    };
    console.log(departId+"");
    courseModel.find({$or:[{departments:departId+""},{general:true}]}).populate("lecturers").exec((err,data)=>{
        if(!err){
                //    console.log(data)
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
      })
    // {lecturers:[departId]}
    // courseModel.find({$or:[{departments:departId+""},{general:true}]},(err,data)=>{
    //     if(!err){
    //             //    console.log(data)
    //           res.status(response.OK_200);
    //           res.json({
    //               success: true,
    //               docs: data
    //           });
    //     }
    //     else{
    //       res.status(response.BAD_REQUEST_400);
    //               console.log(err)
    //               res.json({
    //                   success: false,
    //                   docs: []
    //               })
    //     }
    //   });

    // courseModel.findById(id,(err,data)=>{
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
  
}

/**
 * 
 * used to delete a course
 *  @param req - request object
 *  @param res - response object
 */
 const deletecourse = (req: any, res: any) => {
  // setting the id of the course if passed to {id}
  let id = req.params.id ? req.params.id : '';
 
  // deleting the course where {id} 
  courseModel.deleteOne({ _id: id }).then(val => {
      // course deleted
      let docCount = val.deletedCount;
      let responsMessage = docCount ? "Delleted document" : "Document Not found";
      res.status(response.OK_200);
      res.json({
          success: true,
          deletedCount: docCount,
          message: responsMessage
      })
    
  }).catch(err => {
      // course not deleted
      res.status(response.NO_CONTENT_204);
      res.json({
          success: false,
          message: "Error occured"
      })
  })

};



export default {
  getCourses,
  getCoursesById,
  createCourse,
  updateACourse,
  deletecourse,
  getCoursesByDepartmentId
};

