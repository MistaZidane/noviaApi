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
  deleteTimeTableController: TimeTableController.default.deleteTimeTable 
   
}
