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
import lecturerFreeModel from "../Models/lecturerFreeModel";
/**
 * 
 * used to create a lecturerFree
 *  @param req - request object
 *  @param res - response object
 */
const create = (req: any, res: any) => {
    lecturerFreeModel.create(req.body).then((data) => {
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
 * used to get lecturerFrees
 *  @param req - request object
 *  @param res - response object
 */
// 603eb2ee77259abd63745b4d
const getLecturersFree = (req: any, res: any) => {
    const options = {
        page: req.query.page ? req.query.page : 1,
        limit: req.query.limit ? req.query.limit : 10,
    };
    lecturerFreeModel.find((err,data)=>{
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
 * used to get a lecturer free state by id
 *  @param req - request object
 *  @param res - response object
 */

const getlecturerFreeById = (req: any, res: any) => {
  let id = req.params.id ? req.params.id : '';
  const options = {
      page: req.query.page ? req.query.page : 1,
      limit: req.query.limit ? req.query.limit : 10,
  };
  
  lecturerFreeModel.findById(id,(err,data)=>{
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
 * used to update a lecturerFree
 *  @param req - request object
 *  @param res - response object
 */
const updatelecturerFree = (req: any, res: any) => {
    let id = req.params.id ? req.params.id : '';

    let updateData = req.body;
    lecturerFreeModel.findOneAndUpdate({ _id: id}, updateData, { new: true }, (err, doc) => {
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
 * used to delete a lecturerFree
 *  @param req - request object
 *  @param res - response object
 */
 const deletelecturerFree = (req: any, res: any) => {
    // setting the id of the lecturerFree if passed to {id}
    let id = req.params.id ? req.params.id : '';
   
    // deleting the lecturerFree where {id} 
    lecturerFreeModel.deleteOne({ _id: id }).then(val => {
        // lecturerFree deleted
        let docCount = val.deletedCount;
        let responsMessage = docCount ? "Delleted document" : "Document Not found";
        res.status(response.OK_200);
        res.json({
            success: true,
            deletedCount: docCount,
            message: responsMessage
        })
      
    }).catch(err => {
        // lecturerFree not deleted
        res.status(response.NO_CONTENT_204);
        res.json({
            success: false,
            message: "Error occured"
        })
    })

};



export default {
    getLecturersFree,
  getlecturerFreeById,
  create,
  updatelecturerFree,
  deletelecturerFree
};

