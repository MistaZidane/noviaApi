/*
 * Author: Ntokungwia Zidane
 * Contributors: 
 *
 * Project: Bato Store API
 * This is used to boot up our API
 * Created on Tuesday Jan 18 2022

 */



import * as courseController from "./courseController";
import * as lecturerController from "./lecturerController";
import * as campusController from "./campusController";


export default {
    // for courses
    getCoursesController: courseController.default.getCourses,
    getCoursesByIdController: courseController.default.getCoursesById,
    createCourseControler: courseController.default.createCourse,
    updateCourseController: courseController.default.updateACourse,
    // for lecturers
    getLecturersController: lecturerController.default.getLecturers,
    getLecturerByIdController: lecturerController.default.getLecturerById,
    createLecturerControler: lecturerController.default.createLecturer,
    updateLecturerController: lecturerController.default.updateALecturer,    
     // for campus
     getCampusesController: campusController.default.getCampus,
     getCampusByIdController: campusController.default.getCampusById,
     createCampusControler: campusController.default.createCampus,
     updatecampusController: campusController.default.updateACampus    
 
   
}
