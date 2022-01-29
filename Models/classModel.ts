/*
 * Author: Ntokungwia Zidane
 * Contributors: 
 *
 * Project: 
 * This is used to boot up our API
 * Created on Tuesday Jan 18 2022

 */


import mongoose = require("mongoose");
import paginator = require("mongoose-paginate-v2");

const Schema = mongoose.Schema;



const ClassSchema =new Schema({
    size: {type: Number, require:true},
    name: {type: String, require:true, unique:true},
    campusId: {type:String, require: true}
});


ClassSchema.plugin(paginator);
export default mongoose.model('classes', ClassSchema);
