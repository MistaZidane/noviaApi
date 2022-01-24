/*
 * Author: Ntokungwia Zidane
 * Contributors: 
 *
 * Project: 
 * This is used to boot up our API
 * Created on Tuesday Jan 18 2022

 */



import * as courseController from "./courseController";
import * as lecturerController from "./lecturerController";
import * as campusController from "./campusController";
import * as departmentController from "./departmentsController";
import * as TimeTableController from "./timeTableController";
import * as unassignedController from "./unassignedController";
import * as seatingController from "./seatingController";
import logsController from "./logsController";
import userController from "./userController";
import emailController from "./emailController";
import authCheckController from "./authCheckController";

export default {
    // for courses
    getCoursesController: courseController.default.getCourses,
    getCoursesByIdController: courseController.default.getCoursesById,
    createCourseControler: courseController.default.createCourse,
    updateCourseController: courseController.default.updateACourse,
    deleteCourseController: courseController.default.deletecourse, 
    // for lecturers
    getLecturersController: lecturerController.default.getLecturers,
    getLecturerByIdController: lecturerController.default.getLecturerById,
    createLecturerControler: lecturerController.default.createLecturer,
    updateLecturerController: lecturerController.default.updateALecturer, 
    deleteLecturerController: lecturerController.default.deleteLecturer,  
     // for campus
     getCampusesController: campusController.default.getCampus,
     getCampusByIdController: campusController.default.getCampusById,
     createCampusControler: campusController.default.createCampus,
     updatecampusController: campusController.default.updateACampus,  
     deleteCampusController: campusController.default.deleteCampus,   
  // for campus
  getDepartmentController: departmentController.default.getDepartments,
  getDepartmentByIdController: departmentController.default.getDepartmentById,
  createDepartmentControler: departmentController.default.createDepartment,
  updatedepartmentController: departmentController.default.updateADepartment,
  deleteDepartmentController: departmentController.default.deleteDepartment,
  
  // for time table
  getTimeTableController: TimeTableController.default.getTimeTables,
  getTimeTableByIdController: TimeTableController.default.getTimeTableById,
  createTimeTableControler: TimeTableController.default.createTimeTable,
  updateTimeTableController: TimeTableController.default.updateATimeTable,
  deleteTimeTableController: TimeTableController.default.deleteTimeTable, 
   // for unassigned
  getUnassignedController: unassignedController.default.getUnassigned,
  getUnassignedByIdController: unassignedController.default.getUnassignedById,
  createUnassignedControler: unassignedController.default.createUnassigned,
  updateUnassignedController: unassignedController.default.updateUnassigned,
  deleteUnassignedController: unassignedController.default.deleteUnassigned, 


   // for seating
   getSeatingController: seatingController.default.getSeating,
   getSeatingByIdController: seatingController.default.getSeatingById,
   createSeatingControler: seatingController.default.createSeating,
   updateSeatingController: seatingController.default.updateSeating,
   deleteSeatingController: seatingController.default.deleteSeating, 

   // logs
   getLogController: logsController.getLogs,


   // user
   createUserController: userController.signUp,
   loginUserController: userController.login,


   // for email
   // for seating
   getEmailsController: emailController.getEmails,
   //getSeatingByIdController: seatingController.default.getSeatingById,
   createEmailControler: emailController.createEmail,
   updateEmailController: emailController.updateEmail,
   deleteEmailController: emailController.deleteEmail, 
   sendMailController: emailController.sendAEmails,

   // authCheck 
   authCheckController: authCheckController.check
}

