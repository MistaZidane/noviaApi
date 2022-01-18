
/*
 * Author: Ntokungwia Zidane
 * Contributors: 
 *
 * Project: Bato API
 * This is a default file description //TODO: change description for comments
 * Created on Thu Feb 25 2021
 * Copyright (c) 2021 Omevision Ltd
 */

import { Logger } from "tslog";


 const log: Logger = new Logger({ name: "Logs" });

/**
 * 
 * use as a global logger

 *  @return log method
 */

function logger() {
  return log
}

export default  logger() 



