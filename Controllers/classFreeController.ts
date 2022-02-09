/*
 * Author: Ntokungwia Zidane
 * Contributors: 
 *
 * Project: 
 * This is used to boot up our API
 * Created on Tuesday Jan 18 2022

 */

import response from "../messages/response";
import messages from "../messages/messages";


import path from "path"
import mongoosePaginate = require('mongoose-paginate-v2');
import classFreeModel from "../Models/classFreeModel";
/**
 * 
 * used to create a classFree
 *  @param req - request object
 *  @param res - response object
 */
const create = (req: any, res: any) => {
    classFreeModel.create(req.body).then((data) => {
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
 * used to get classFrees
 *  @param req - request object
 *  @param res - response object
 */
// 603eb2ee77259abd63745b4d
const getClassesFree = (req: any, res: any) => {
    const options = {
        page: req.query.page ? req.query.page : 1,
        limit: req.query.limit ? req.query.limit : 10,
    };
    classFreeModel.find((err,data)=>{
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
const getclassFreeById = (req: any, res: any) => {
  let id = req.params.id ? req.params.id : '';
  const options = {
      page: req.query.page ? req.query.page : 1,
      limit: req.query.limit ? req.query.limit : 10,
  };
  
  classFreeModel.findById(id,(err,data)=>{
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
 * used to update a classFree
 *  @param req - request object
 *  @param res - response object
 */
const updateclassFree = (req: any, res: any) => {
    let id = req.params.id ? req.params.id : '';

    let updateData = req.body;
    classFreeModel.findOneAndUpdate({ _id: id}, updateData, { new: true }, (err, doc) => {
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
 * used to delete a classFree
 *  @param req - request object
 *  @param res - response object
 */
 const deleteclassFree = (req: any, res: any) => {
    // setting the id of the classFree if passed to {id}
    let id = req.params.id ? req.params.id : '';
   
    // deleting the classFree where {id} 
    classFreeModel.deleteOne({ _id: id }).then(val => {
        // classFree deleted
        let docCount = val.deletedCount;
        let responsMessage = docCount ? "Delleted document" : "Document Not found";
        res.status(response.OK_200);
        res.json({
            success: true,
            deletedCount: docCount,
            message: responsMessage
        })
      
    }).catch(err => {
        // classFree not deleted
        res.status(response.NO_CONTENT_204);
        res.json({
            success: false,
            message: "Error occured"
        })
    })

};



export default {
  getClassesFree,
  getclassFreeById,
  create,
  updateclassFree,
  deleteclassFree
};

