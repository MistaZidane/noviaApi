/*
 * Author: Ntokungwia Zidane
 * Contributors: 
 *
 * Project: Bato Store API
 * This is used to boot up our API
 * Created on Tuesday Jan 18 2022

 */

import mongoose = require('mongoose');
import logger from '../logger/index'

let options = {
     useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify:false
}
let startMongo = () => {
  mongoose.connect('mongodb+srv://zidane:<eAvhUZ8kHeGWRTk>@cluster0.js9x7.mongodb.net/novia?retryWrites=true&w=majority',options)
  const connection = mongoose.connection;
    return connection;
}

export default startMongo;