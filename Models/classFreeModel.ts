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
    // campusName+className+period+day+semester

    state: { type: String, require: true },
    department: { type: String, require: true },
});

logsSchema.plugin(paginator);
export default mongoose.model('classState', logsSchema);
