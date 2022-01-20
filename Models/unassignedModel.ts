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
const UnassignedSchema = new Schema({
    course: { type: String, require: true },
    department: { type: Schema.Types.ObjectId,  require: true, ref: 'departments' },
    day: { type: String, require: true },
    
});

UnassignedSchema.plugin(paginator);
export default mongoose.model('unassigned', UnassignedSchema);
