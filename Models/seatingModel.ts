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
const seatingSchema = new Schema({
    table: [],
    semester:{ type: Schema.Types.ObjectId, ref: 'semester' },
    campus:{ type: Schema.Types.ObjectId, ref: 'campus' },
    department:{ type: Schema.Types.ObjectId, ref: 'department' },
});

seatingSchema.plugin(paginator);
export default mongoose.model('seating', seatingSchema);
