/*
 * Author: Ntokungwia Zidane
 * Contributors: 
 *
 * Project: 
 * This is used to boot up our API
 * Created on Tuesday Jan 18 2022

 */


import courseRoutes from './courseRoute';
import lecturerRoutes from './lecturersRoute';
import campusRoutes from './campusRoute';
import departmentRoutes from './departmentRoute';
import tableRoutes from './timeTableRoutes';
import unassignedRoutes from './unassignedRoute';
import seatingRoute from  './seatingRoute';
 import logRoute from './logRoute';
 import userRoute from "./userRoute";
 import emailRoute from "./emailRoute";

export default {

    courseRoutes,
    lecturerRoutes,
    campusRoutes,
    departmentRoutes,
    tableRoutes,
    unassignedRoutes,
    seatingRoute,
    logRoute,
    userRoute,
    emailRoute
      
}