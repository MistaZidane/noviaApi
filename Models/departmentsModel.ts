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

const DepartmentCourseSchema =new Schema({
    course: [{type: Schema.Types.ObjectId, ref: 'courses' }],
    lecturer:  [{type: Schema.Types.ObjectId, ref: 'lecturer' }],
    needsLab: {type: Boolean, default: false},
    totHours: {type: Number},
    weight: {type: Number},
    numberOfHoursAweek:{type: Number},
    semester: {type: String},
    days: []
});


const DepartmentSchema = new Schema({
    name: { type: String, unique: true, require: true },
    laboratories: [],
    size: { type: Number, require: true },
    campus: { type: Schema.Types.ObjectId,  require: true, ref: 'campus' },
    daysAndCoursedToHave: [],
    session: {type: String, default: "Day"},
    courses:[DepartmentCourseSchema]
    
});

DepartmentSchema.plugin(paginator);
export default mongoose.model('departments', DepartmentSchema);
