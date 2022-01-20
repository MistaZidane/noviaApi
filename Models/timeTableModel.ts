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
const TimeTableSchema = new Schema({
    name: { type: String, unique: true, require: true },
    department: { type: Schema.Types.ObjectId,  require: true, ref: 'department',unique: true, },
    table: [],
    
});

TimeTableSchema.plugin(paginator);
export default mongoose.model('timeTable', TimeTableSchema);
