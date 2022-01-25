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
const LecturerSchema = new Schema({
    name: { type: String, unique: true, require: true },
    email: { type: String, default: '' },
    phone: { type: String, default: '' },
    courses: [{type:Schema.Types.ObjectId,ref: "courses", unique:true}]
    
});

LecturerSchema.plugin(paginator);
export default mongoose.model('lecturer', LecturerSchema);
