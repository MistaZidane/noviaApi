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
const DepartmentSchema = new Schema({
    name: { type: String, unique: true, require: true },
    laboratories: [],
    size: { type: Number, require: true },
    campus: { type: Schema.Types.ObjectId,  require: true, ref: 'campus' },
    daysAndCoursedToHave: [],
    courses:[]
    
});

DepartmentSchema.plugin(paginator);
export default mongoose.model('departments', DepartmentSchema);
