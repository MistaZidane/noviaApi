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
import classController from "./classController";
import semesterController from "./semesterController";
import courseInDepartmentController from "./courseInDepartmentController";
import lecturerFreeController from "./lecturerFreeController";
import classFreeController from "./classFreeController";
import departmentFreeController from "./departmentFreeController";


export default {
    // for courses
    getCoursesController: courseController.default.getCourses,
    getCoursesByIdController: courseController.default.getCoursesById,
    createCourseControler: courseController.default.createCourse,
    updateCourseController: courseController.default.updateACourse,
    deleteCourseController: courseController.default.deletecourse, 
    getCoursesByDepartment: courseController.default.getCoursesByDepartmentId,
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
  // for department
  getDepartmentController: departmentController.default.getDepartments,
  getDepartmentByIdController: departmentController.default.getDepartmentById,
  createDepartmentControler: departmentController.default.createDepartment,
  updatedepartmentController: departmentController.default.updateADepartment,
  deleteDepartmentController: departmentController.default.deleteDepartment,
    // for class
    getClassesController: classController.getClass,
    getClassByCampusIdController: classController.getClassByCampusId,
    createClassControler: classController.createClass,
    updateClassController: classController.updateAClass,
    deleteClassController: classController.deleteClass,
    
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


// for coursesInDepartments 
createCourseInDepartmentController: courseInDepartmentController.createCourseInDepartment,
getCourseInDepartmentByIdController: courseInDepartmentController.getCourseInDepartmentById,
getCoursesInDepartmentController: courseInDepartmentController.getCoursesInDepartments,
updateCourseInDepartmenrController: courseInDepartmentController.updateCourseInDepartment, 
deleteCourseIndepartmentController: courseInDepartmentController.deleteCourseInDepartment,  


   // for seating
   getSeatingController: seatingController.default.getSeating,
   getSeatingByIdsController: seatingController.default.getSeatingByIds,
   createSeatingControler: seatingController.default.createSeating,
   updateSeatingController: seatingController.default.updateSeating,
   deleteSeatingController: seatingController.default.deleteSeating, 
  // for semester
  getSemestersController: semesterController.getSemester,
  getSemesterByIdController: semesterController.getSemesterById,
  createSemesterControler: semesterController.createSemester,
  updateSemesterController: semesterController.updateASemester,  
  deleteSemesterController: semesterController.deleteSemester,  
   // logs
   getLogController: logsController.getLogs,
// lecturer free state 
getLecturerFreeStateController: lecturerFreeController.getLecturersFree,
getLecturerFreeStateByIdController: lecturerFreeController.getlecturerFreeById,
createLecturerFreeStateController: lecturerFreeController.create,
updateLecturerFreeStateController: lecturerFreeController.updatelecturerFree,
deleteLecturerFreeStateController: lecturerFreeController.deletelecturerFree,
// class free state 
getClassFreeStateController: classFreeController.getClassesFree,
getClassFreeStateByIdController: classFreeController.getclassFreeById,
createClassFreeStateController: classFreeController.create,
updateClassFreeStateController: classFreeController.updateclassFree,
deleteClassFreeStateController: classFreeController.deleteclassFree,

// department free state

getDepartmentFreeStateController: departmentFreeController.getDepartmentsFree,
getDepartmentFreeStateByIdController: departmentFreeController.getdepartmentFreeById,
createDepartmentFreeStateController: departmentFreeController.create,
updateDeparmentFreeStateController: departmentFreeController.updatedepartmentFree,
deleteDepartmentFreeStateController: departmentFreeController.deletedepartmentFree,

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

