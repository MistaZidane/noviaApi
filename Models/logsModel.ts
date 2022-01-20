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
const logsSchema = new Schema({
    data: { type: String, require: true },
    // create, delete, view, edit, login, logout
    type: { type: Boolean, require: true },
    
});

logsSchema.plugin(paginator);
export default mongoose.model('logs', logsSchema);
