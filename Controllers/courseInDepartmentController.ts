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
import CourseInDepartmentModel from "../Models/courseInDepartmentDetailsModel";
import mailer from "../Utils/mailer";
/**
 * 
 * used to create a courses in department
 *  @param req - request object
 *  @param res - response object
 */
const createCourseInDepartment = (req: any, res: any) => {
    CourseInDepartmentModel.create(req.body).then((data) => {
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

    // CourseInDepartmentModel.create(req.body)
};


/**
 * 
 * used to get Logs
 *  @param req - request object
 *  @param res - response object
 */

const getCoursesInDepartments = (req: any, res: any) => {
    const options = {
        page: req.query.page ? req.query.page : 1,
        limit: req.query.limit ? req.query.limit : 10,
    };
    let departId = req.query.departId ? req.query.departId : "";
      CourseInDepartmentModel.find({department:departId},(err,data)=>{
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
 * used to get a course in department by id
 *  @param req - request object
 *  @param res - response object
 */
// 603eb2ee77259abd63745b4d
const getCourseInDepartmentById = (req: any, res: any) => {
  let id = req.params.id ? req.params.id : '';
  const options = {
      page: req.query.page ? req.query.page : 1,
      limit: req.query.limit ? req.query.limit : 10,
  };
  
  CourseInDepartmentModel.findById(id,(err,data)=>{
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
 * used to update a Log
 *  @param req - request object
 *  @param res - response object
 */
const updateCourseInDepartment = (req: any, res: any) => {
    let id = req.params.id ? req.params.id : '';

    let updateData = req.body;
    CourseInDepartmentModel.findOneAndUpdate({ _id: id}, updateData, { new: true }, (err, doc) => {
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
 * used to delete a Log
 *  @param req - request object
 *  @param res - response object
 */
 const deleteCourseInDepartment = (req: any, res: any) => {
    // setting the id of the Log if passed to {id}
    let id = req.params.id ? req.params.id : '';
   
    // deleting the Log where {id} 
    CourseInDepartmentModel.deleteOne({ _id: id }).then(val => {
        // Log deleted
        let docCount = val.deletedCount;
        let responsMessage = docCount ? "Delleted document" : "Document Not found";
        res.status(response.OK_200);
        res.json({
            success: true,
            deletedCount: docCount,
            message: responsMessage
        })
      
    }).catch(err => {
        // Log not deleted
        res.status(response.NO_CONTENT_204);
        res.json({
            success: false,
            message: "Error occured"
        })
    })

};
/**
 * 
 * used to get a course in department by id
 *  @param req - request object
 *  @param res - response object
 */
// 603eb2ee77259abd63745b4d
const sendACourseInDepartments = (req: any, res: any) => {
    const query = {
        lecturer: "",
        departmentId:"",
        campusId:''

}
// setting only data that comes through
console.log(req.body.to.lecturers);

if(req.body.to.department){
    query.departmentId = req.body.to.department;
}
else{
    delete query.departmentId;
}
if(req.body.to.lecturers){
    query.lecturer = req.body.to.lecturers;
}
else{
    delete query.lecturer;
}
if(req.body.to.campusId){
    query.campusId = req.body.to.campusId;
}
else{
    delete query.campusId;
}
console.log(query, "asxsc");

let CourseInDepartmentQuery = CourseInDepartmentModel.find(query).select('CourseInDepartment -_id')
CourseInDepartmentQuery.exec((err,data)=>{
      if(!err){
          console.log(data);
          
          mailer.mailer(req,res, data);
      }
      else{
        res.status(response.BAD_REQUEST_400);
                console.log(err)
                res.json({
                    success: false,
                    message: "CourseInDepartments not sent"
                })
      }
    });

   
  
  
  };


export default {
    getCoursesInDepartments,
  getCourseInDepartmentById,
  createCourseInDepartment,
  updateCourseInDepartment,
  deleteCourseInDepartment,
  sendACourseInDepartments
};

