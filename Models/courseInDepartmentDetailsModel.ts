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
const CourseSchema = new Schema({
    course: { type:Schema.Types.ObjectId, ref:'courses' },
    semester: { type: String },
    department: {type: String,require:true},
    lecturer: {type:String, require:true},
    totHours: {type: Number, require:true},
    needsLab: {type: Boolean, default:false},
    day: {type: String, require:true},
    period: [{type: String, require:true}],
});

CourseSchema.plugin(paginator);
export default mongoose.model('courseInDepartment', CourseSchema);
