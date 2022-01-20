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
    name: { type: String, require: true },
    table: {}
});

seatingSchema.plugin(paginator);
export default mongoose.model('seating', seatingSchema);
