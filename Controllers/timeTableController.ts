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
import timeTable from "../Models/timeTableModel";
import CourseInDepartmentModel from "../Models/courseInDepartmentDetailsModel";
import departmentModel from "../Models/departmentsModel";

import ClassModel from "../Models/ClassModel";
import algo from "../algo";
/**
 * 
 * used to create a TimeTable
 *  @param req - request object
 *  @param res - response object
 */
const createTimeTable = (req: any, res: any) => {
    let campusId = req.params.campusId ? req.params.campusId : '';
    let semesterId = req.params.semesterId ? req.params.semesterId : '';
    // get departments by  campus Id
    // get departmentsId to an array and use it below
    let departMentIds = [];
    departmentModel.find({campus:"622072cd5a1ffa64007b5cf2"}).populate('laboratories').populate("campus").exec((err,Departsdata)=>{
        if(!err){
            // console.log("department in campus",)
            let newDepartData = JSON.parse(JSON.stringify(Departsdata));
            newDepartData.forEach((elem:any)=>{
                // console.log(elem._id);
                elem.courses = [];
                // console.log(elem);
                
                departMentIds.push(elem._id+"");
                
            });
            // console.log(departMentIds,"oscocsocsofs");
            CourseInDepartmentModel.find({$and:[{semester:"622073d65a1ffa64007b5d59"}, {"department": { $in:departMentIds}}]}).populate("course").populate("lecturer").exec((err,data)=>{
                if(!err){
                        //    console.log("courses in semester",JSON.stringify(data))
                    // console.log("oka", data);
                    // res.send(data);
                    departMentIds.forEach((id:any, index:any)=>{
                   
                    let filteredArr =  data.filter((elem:any)=>{
                        // console.log(elem);
                        
                            return elem.department == id;
                        });
                        newDepartData[index].courses = filteredArr;
                        // console.log( newDepartData[index].courses,"test");
                       
                        
                        
                    });

             
                    
            res.send(newDepartData);
            // getting classes n its campus
                    ClassModel.find({campusId:"622072cd5a1ffa64007b5cf2"},(classEror,classData)=>{
                        // console.log(classData,"campus");
                        console.log(algo.generateClasroomsTableForACampus(classData,newDepartData, semesterId, campusId));
                        ;
                    })
                }
                else{
                    console.log(err);
                    
                }
            
              });
        }
        else{
          res.status(response.BAD_REQUEST_400);
                  console.log(err)
                
        }
      });


};


/**
 * 
 * used to get TimeTables
 *  @param req - request object
 *  @param res - response object
 */
// 603eb2ee77259abd63745b4d
const getTimeTables = (req: any, res: any) => {
    const options = {
        page: req.query.page ? req.query.page : 1,
        limit: req.query.limit ? req.query.limit : 10,
    };
    timeTable.find().populate('department').populate('semester').exec((err,data)=>{
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
    // timeTable.find((err,data)=>{
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
const getTimeTableById = (req: any, res: any) => {
  let id = req.params.id ? req.params.id : '';
  let departmentId = req.params.departmentId ? req.params.departmentId : '';
  let semesterId = req.params.semesterId ? req.params.semesterId : '';
  const options = {
      page: req.query.page ? req.query.page : 1,
      limit: req.query.limit ? req.query.limit : 10,
  };
  
  timeTable.find({semester:semesterId, department:departmentId},(err,data)=>{
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
 * used to update a TimeTable
 *  @param req - request object
 *  @param res - response object
 */
const updateATimeTable = (req: any, res: any) => {
    let id = req.params.id ? req.params.id : '';

    let updateData = req.body;
    timeTable.findOneAndUpdate({ _id: id}, updateData, { new: true }, (err, doc) => {
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
 * used to delete a TimeTable
 *  @param req - request object
 *  @param res - response object
 */
 const deleteTimeTable = (req: any, res: any) => {
    // setting the id of the TimeTable if passed to {id}
    let id = req.params.id ? req.params.id : '';
   
    // deleting the TimeTable where {id} 
    timeTable.deleteOne({ _id: id }).then(val => {
        // TimeTable deleted
        let docCount = val.deletedCount;
        let responsMessage = docCount ? "Delleted document" : "Document Not found";
        res.status(response.OK_200);
        res.json({
            success: true,
            deletedCount: docCount,
            message: responsMessage
        })
      
    }).catch(err => {
        // TimeTable not deleted
        res.status(response.NO_CONTENT_204);
        res.json({
            success: false,
            message: "Error occured"
        })
    })

};



export default {
  getTimeTables,
  getTimeTableById,
  createTimeTable,
  updateATimeTable,
  deleteTimeTable
};

