/*
 * Author: Ntokungwia Zidane
 * Contributors: 
 *
 * Project: Bato Store API
 * This is used to boot up our API
 * Created on Tuesday Jan 18 2022

 */


import mongoose = require("mongoose");
import paginator = require("mongoose-paginate-v2");

const Schema = mongoose.Schema;
const CampusSchema = new Schema({
    name: { type: String, unique: true, require: true },
    classes: [],
    
});

CampusSchema.plugin(paginator);
export default mongoose.model('campus', CampusSchema);
