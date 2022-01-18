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
	useFindAndModify: false

}
let startMongo = () => {
  mongoose.connect('mongodb://127.0.0.1:27017/novia',options);
  const connection = mongoose.connection;
    return connection;
}

export default startMongo;