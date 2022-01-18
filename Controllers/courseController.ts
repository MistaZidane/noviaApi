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
// const mongoosePaginate = require('mongoose-paginate-v2');
import courseModel from "../models/courseModel";
/**
 * 
 * used to create an order
 *  @param req - request object
 *  @param res - response object
 */
// const createOrder = (req: any, res: any) => {
//     ordersModel.create(req.body).then((data) => {
//         res.status(response.CREATED_201);
//         res.json({
//             success: true,
//             docs: data
//         });
//     }).catch(err => {
//         res.status(response.BAD_REQUEST_400);
//         res.json({
//             success: false,
//             docs: []
//         })
//     })

// };

/**
 * 
 * used to get an oder by id
 *  @param req - request object
 *  @param res - response object
 */
// const getOrderById = (req: any, res: any) => {
//     let id = req.params.id ? req.params.id : '';
//     let ownerId = req.headers.user;
//     ordersModel.find({ _id: id, ownerId: ownerId }, (err, data) => {
//         if (err) {
//             res.status(response.BAD_REQUEST_400);
//             res.json({
//                 success: false,
//                 docs: {},
//                 message: "NO DOC FOUND"
//             })
//         }
//         else {
//             res.status(response.OK_200);
//             res.json({
//                 success: true,
//                 doc: data[0]
//             });
//         }
//     });
// };

/**
 * 
 * used to get n order
 *  @param req - request object
 *  @param res - response object
 */
// 603eb2ee77259abd63745b4d
const getCourses = (req: any, res: any) => {
    let ownerId = req.headers.user;
    const options = {
        page: req.query.page ? req.query.page : 1,
        limit: req.query.limit ? req.query.limit : 10,

    };
    res.send("okay");
    // const search = req.query.search ? req.query.search : '';
    // let searchString = new RegExp(search);
    // let query5 = {
    //     ownerId: ownerId,
    //     $or: [{ "name": { $regex: searchString, $options: 'i' } }, { "slug": { $regex: searchString, $options: 'i' } }]
    // }

    // ordersModel.paginate(query5, options, (err, data) => {
    //     if (err) {
    //         res.status(response.BAD_REQUEST_400);
    //         console.log(err)
    //         res.json({
    //             success: false,
    //             docs: []
    //         })
    //     }
    //     else {
    //         console.log(data)
    //         res.status(response.OK_200);
    //         res.json({
    //             success: true,
    //             docs: data
    //         });
    //     }
    // })

};

/**
 * 
 * used to update a store
 *  @param req - request object
 *  @param res - response object
 */
// const updateAOrder = (req: any, res: any) => {
//     let id = req.params.id ? req.params.id : '';
//     let ownerId = req.headers.user;
//     let updateData = req.body;
//     ordersModel.findOneAndUpdate({ _id: id, ownerId: ownerId }, updateData, { new: true }, (err, doc) => {
//         if (err) {
//             res.status(response.BAD_REQUEST_400);
//             res.json({
//                 success: false,
//                 docs: []
//             })
//         }
//         else {
//             res.status(response.OK_200);
//             res.json({
//                 success: true,
//                 docs: doc,
//                 message: "Updates Successfully"
//             });
//         }
//     })
// };





/**
 * 
 * used to export orders to csv file
 *  @param req - request object
 *  @param res - response object
 */

// const exportOrders = (req: any, res: any) => {
//     let ownerId = req.headers.user;
//     ordersModel.find({ ownerId: ownerId }, "shipped shippable products shippingStatus quantity paymentMethod totalAmount",
//         {},
//         (err, data) => {
//             if (err) {
//             } else {
//                 let newData = JSON.parse(JSON.stringify(data));

//                 let fileName = csvMaker(newData);
//                 res.sendFile(path.join(__dirname, `../tempFiles/${fileName}.csv`));
//             }
//         }
//     );
// };


/**
 * 
 * used to get an oder by id
 *  @param req - request object
 *  @param res - response object
 */
// const getOrderCountByShopId = (req: any, res: any) => {
//     let id = req.params.id ? req.params.id : '';
//     let ownerId = req.headers.user;
//     ordersModel.find({ shopId: id, ownerId: ownerId }, (err, data) => {

//         if (err) {
//             res.status(response.BAD_REQUEST_400);
//             res.json({
//                 success: false,
//                 count: 0,
//                 message: "NO DOC FOUND"
//             })
//         }
//         else {
//             res.status(response.OK_200);
//             res.json({
//                 success: true,
//                 count: data.length
//             });
//         }
//     });
// };



export default {
  getCourses
};

