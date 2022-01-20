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
import UnassignedModel from "../Models/UnassignedModel";
/**
 * 
 * used to create a Unassigned
 *  @param req - request object
 *  @param res - response object
 */
const createUnassigned = (req: any, res: any) => {
    UnassignedModel.create(req.body).then((data) => {
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
 * used to get Unassigneds
 *  @param req - request object
 *  @param res - response object
 */
// 603eb2ee77259abd63745b4d
const getUnassigned = (req: any, res: any) => {
    const options = {
        page: req.query.page ? req.query.page : 1,
        limit: req.query.limit ? req.query.limit : 10,
    };
    UnassignedModel.find().populate('department').exec((err,data)=>{
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
    // Unassigned.find((err,data)=>{
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
const getUnassignedById = (req: any, res: any) => {
  let id = req.params.id ? req.params.id : '';
  const options = {
      page: req.query.page ? req.query.page : 1,
      limit: req.query.limit ? req.query.limit : 10,
  };
  
  UnassignedModel.findById(id,(err,data)=>{
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
 * used to update a Unassigned
 *  @param req - request object
 *  @param res - response object
 */
const updateUnassigned = (req: any, res: any) => {
    let id = req.params.id ? req.params.id : '';

    let updateData = req.body;
    UnassignedModel.findOneAndUpdate({ _id: id}, updateData, { new: true }, (err, doc) => {
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
 * used to delete a Unassigned
 *  @param req - request object
 *  @param res - response object
 */
 const deleteUnassigned = (req: any, res: any) => {
    // setting the id of the Unassigned if passed to {id}
    let id = req.params.id ? req.params.id : '';
   
    // deleting the Unassigned where {id} 
    UnassignedModel.deleteOne({ _id: id }).then(val => {
        // Unassigned deleted
        let docCount = val.deletedCount;
        let responsMessage = docCount ? "Delleted document" : "Document Not found";
        res.status(response.OK_200);
        res.json({
            success: true,
            deletedCount: docCount,
            message: responsMessage
        })
      
    }).catch(err => {
        // Unassigned not deleted
        res.status(response.NO_CONTENT_204);
        res.json({
            success: false,
            message: "Error occured"
        })
    })

};



export default {
  getUnassigned,
  getUnassignedById,
  createUnassigned,
  updateUnassigned,
  deleteUnassigned
};

