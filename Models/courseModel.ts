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
    title: { type: String, unique: true, require: true },
    description: { type: String, default: '' },
    departments: [{type: String}],
    lecturers: [{type:Schema.Types.ObjectId, ref:'lecturer'}],
    general: {type: Boolean, default: false}
});

CourseSchema.plugin(paginator);
export default mongoose.model('courses', CourseSchema);
