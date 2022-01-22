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
const userSchema = new Schema({
    email: { type: String, require: true, unique:true },
    password: { type: String, require: true },
    
});

userSchema.plugin(paginator);
export default mongoose.model('user', userSchema);
