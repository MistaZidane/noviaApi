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



const CampusSchema = new Schema({
    name: { type: String, unique: true, require: true },
    description: {type:String},
    
});

CampusSchema.plugin(paginator);
export default mongoose.model('semester', CampusSchema);
