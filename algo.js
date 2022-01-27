let days = 6;
let daysInweek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let timeFromPeriodArray = [
    { time: "8H - 10H" },
    { time: "10H - 12H" },
    { time: "13H - 15H" },
    { time: "15H - 17H" }
]
let departments = [
    {
        name: "SWE2",
        laboratories: ["labo 7", "labo 6"],
        size: 30,
        campus: 'Campus B',
        daysAndCoursedToHave: [
            { day: "Monday", courses: ["maths"] },
            { day: "Tuesday", courses: ["_"] },
            { day: "Wednesday", courses: ["english"] },
            { day: "Thursday", courses: ["chem"] },
            { day: "Friday", courses: ["physics"] },
            { day: "Saturday", courses: ["_"] },
        ],
        // add days here for refactoring
        courses: [
            { title: "maths", totHours: 40, lecturer: "Zidane", needsLab: true, weight: 13, numberOfHoursAweek: 4, periods: [1, 2,3,4], days: ['Monday'] },
            { title: "physics", totHours: 36, lecturer: "odin", needsLab: false, weight: 10, numberOfHoursAweek: 4, periods: [3, 4], days: ['Friday'] },
            { title: "chem", totHours: 20, lecturer: "ngwa", needsLab: false, weight: 3, numberOfHoursAweek: 4, periods: [3, 4], days: ['Thursday'] },
            { title: "english", totHours: 16, lecturer: "longest", needsLab: false, weight: 4, numberOfHoursAweek: 2, periods: [1, 2,], days: ['Wednesday'] }
        ]
    },
    {
        name: "SWE1",
        laboratories: ["labo 7", "labo 6"],
        size: 25,
        campus: 'Campus B',
        daysAndCoursedToHave: [
            { day: "Monday", courses: ["english","french"] },
            { day: "Tuesday", courses: ["maths"] },
            { day: "Wednesday", courses: ["_"] },
            { day: "Thursday", courses: ["sql"] },
            { day: "Friday", courses: ["_"] },
            { day: "Saturday", courses: ["_"] },
        ],
        courses: [
            { title: "maths", totHours: 40, lecturer: "Zidane", needsLab: true, weight: 13, numberOfHoursAweek: 4, periods: [1,2,3, 4] , days: ['Tuesday']},
            { title: "french", totHours: 16, lecturer: "odin", needsLab: false, weight: 2, numberOfHoursAweek: 2, periods: [4] , days: ['Monday']},
            { title: "sql", totHours: 36, lecturer: "ngwa", needsLab: false, weight: 3, numberOfHoursAweek: 4, periods: [1, 2] , days: ['Thursday']},
            { title: "english", totHours: 16, lecturer: "longest", needsLab: true, weight: 4, numberOfHoursAweek: 2, periods: [1] , days: ['Monday']}
        ]
    },
    {
        name: "MIT",
        laboratories: ["labo 7", "labo 6"],
        size: 25,
        campus: 'Campus B',
        daysAndCoursedToHave: [
            { day: "Monday", courses: ["english"] },
            { day: "Tuesday", courses: ["maths"] },
            { day: "Wednesday", courses: ["_"] },
            { day: "Thursday", courses: ["sql"] },
            { day: "Friday", courses: ["_"] },
            { day: "Saturday", courses: ["french"] },
        ],
        courses: [
            { title: "maths", totHours: 40, lecturer: "Zidane", needsLab: true, weight: 13, numberOfHoursAweek: 4, periods: [3, 4] , days: ['Tuesday']},
            { title: "french", totHours: 16, lecturer: "odin", needsLab: false, weight: 2, numberOfHoursAweek: 2, periods: [4] , days: ['Saturday']},
            { title: "sql", totHours: 36, lecturer: "ngwa", needsLab: false, weight: 3, numberOfHoursAweek: 4, periods: [1, 2] , days: ['Thursday']},
            { title: "english", totHours: 16, lecturer: "longest", needsLab: true, weight: 4, numberOfHoursAweek: 2, periods: [1] , days: ['Monday']}
        ]
    },
    


];

let campus = [{
    name: "Campus A",
    classes: [
        {
            name: "d02",
            size: 30,
            isLaboratory: false
        },
        {
            name: "d01",
            size: 20,
            isLaboratory: false
        },
        {
            name: "labo 7",
            size: 35,
            isLaboratory: true
        },
        {
            name: "labo 6",
            size: 35,
            isLaboratory: true
        },
    ]
},
{
    name: "Campus B",
    classes: [
        {
            name: "d02",
            size: 30,
            isLaboratory: false
        },
        {
            name: "d01",
            size: 20,
            isLaboratory: false
        },
        {
            name: "labo 7",
            size: 37,
            isLaboratory: true
        },
        {
            name: "labo 6",
            size: 35,
            isLaboratory: true
        },
    ]
}

];


function generateTimeTable() {
    let departmentOutputTable = { table: [] }

    let output = []

    for (let i = 0; i < departments.length; i++) {
        let timeTable = []
        let current = departments[i];
        departmentOutputTable.name = current.name;
        // console.log(departmentOutputTable.name,' first');
        // departmentOutputTable.table.push({day: current. })
        current.daysAndCoursedToHave.forEach((day) => {
            // console.log(day);
            day.courses.forEach((dayCourse) => {
                // console.log(dayCourse)
                current.courses.forEach((course) => {
                    if (dayCourse == course.title) {
                        //    console.log(true);
                        let timeTableForDay = {
                            day: day.day,
                            time: [],
                            course: course.title,
                            lecturer: course.lecturer
                        }
                       
                        // timeTableForDay.time.push(timeFromPeriodArray[period-1].time)
                        course.periods.forEach((period) => {
                            timeTableForDay.time.push(timeFromPeriodArray[period - 1].time)
                        })
                        timeTable.push(timeTableForDay);

                    }

                })
            })
            departmentOutputTable.table = timeTable;
            departmentOutputTable.name = current.name;

        })

        output.push({ name: departmentOutputTable.name, table: departmentOutputTable.table })

    }

    return output;
}

// generateTimeTable();
console.log(generateTimeTable(), 'time table');



function generateClasroomsTableForACampus(campusName) {
    let output = {};
    let outputArray = [];
    let outputUnassignedDepartments = [];
    let wholeDayClasses = [];
    // getting campus
    let sectedCampus = campus.find(camp => camp.name == campusName)

    // sorting the classes in the campus by size
    sectedCampus.classes.sort((a, b) => a.size - b.size);
    // console.log(sectedCampus);
    // getting departments using that campus

    let selectedDepartments = departments.filter(department => department.campus == campusName);
    // sorting the selected departments by size
    selectedDepartments.sort((a, b) => a.size - b.size)

    // console.log(selectedDepartments);

    // get all departments who have classes in the morning and afternoon each day  


    // console.log(day);
    let table = {};
    let morningClassesAndDepartments = [];
    let afternoonClassesAndDepartments = [];
    
    selectedDepartments.forEach((currentDepartment, index) => {
        // sending department name to output array
    outputArray.push({name:currentDepartment.name, table:{}})
        // getting a course in a list of courses in a department
        currentDepartment.courses.forEach((course) => {
            let data = {
                department: currentDepartment.name,
                size: currentDepartment.size,
                course: course.title,
                needsLab: course.needsLab,
                laboratories: currentDepartment.laboratories,
                day: '',
                wholeDay: false
            }
            course.days.forEach((day)=>{
             
                data.day = day;
            })
            // console.log(course.title);
            // checking if the course is in the morning or afternoon
            // handling whole day classes using morning periods
            if (course.periods.includes(1) || course.periods.includes(2)) {
                // console.log(data, "data");
                // checking if course is for the whole day or for three periods
            // this should enable them to stay in one classroom without changing classrooms
            if(course.periods.length >=3 ){
                data.wholeDay = true;
                // wholeDayClasses.push(data);
                morningClassesAndDepartments.push(data);
                // console.log("morning side", data);
            }
            else{
                morningClassesAndDepartments.push(data);
            }
            }
            else if(course.periods.includes(3) || course.periods.includes(4)){
                if(course.periods.length >=3 ){
                    // console.log(data, "datjv,ggcvjgvvugutvfytkukufyukyffukyfuyfyuyfuyfa");
                    data.wholeDay = true;
                    // wholeDayClasses.push(data);
                    afternoonClassesAndDepartments.push(data);
                }
                else{
                    afternoonClassesAndDepartments.push(data);
                    // console.log(data, "datjv,ggcvjgvvugutvfytkukufyukyffukyfuyfyuyfuyfa");
                }
                
            }
            
        })
        currentDepartment.daysAndCoursedToHave.forEach((currentDay) => {

        })
    })

    // console.log(morningClassesAndDepartments, 'morning');
    // console.log(afternoonClassesAndDepartments, 'afternoon');

    // divide classes to departments in the morning from monday to sunday
    let dayMorningDepartments = {
        
    }
    daysInweek.forEach((day)=>{
        // get all courses on thasame morning (monday, tuesday ..... morning);
        output[day] = {
            morning: "",
            afternoon: ""
        }
        let activeDayMorningDepartments = morningClassesAndDepartments.filter((department => department.day == day));
        // make sure you add a day with a classs in the morning 
        if(activeDayMorningDepartments.length >0){
             dayMorningDepartments[`${day}`] = activeDayMorningDepartments;
        }
    });
    // console.log(dayMorningDepartments, 'day morning departments');
    

    // share classes to departments in the morning
        
    Object.keys(dayMorningDepartments).forEach(element=>{
        // all departments with classes in a particulaar day in the morning
        let usedLabs = [];
        let usedClasses = [];
        dayMorningDepartments[`${element}`].forEach(departmentsInfo => {
            // console.log(departmentsInfo.day);
            
            
            // getting  

            // assigning a class

             // getting the correct department from the output array
             let departOutput =  outputArray.find(value => value.name == departmentsInfo.department);
             // setting the output day
             let  departOutputSession = departOutput.table[departmentsInfo.day] = {};
             
            //  console.log(departmentsInfo,'info');
            // checking if the course needs a lab
            if(departmentsInfo.needsLab ==  true){
                console.log("lab needed");
                // console.log(sectedCampus.classes);
                // selcting an approiprate labo with size constraints 
                // selecting all classes that a laboratories for the course
                let labs = [];
                sectedCampus.classes.forEach((classRoom)=>{
                    if(departmentsInfo.laboratories.includes(classRoom.name)){
                        labs.push(classRoom);
                    }
                });
                // getting the best fit lab
                // console.log(labs,'labs before', labs.length);
                let bestLab = {};
                // console.log(labs);
                let chosen = '';
                // check if lab has   been used
                // console.log(usedLabs);
                 if(!usedLabs.includes(labs[0].name)){
                    bestLab = labs[0];
                    //  console.log("lab is free");
                    let whole = false;
                    if(departmentsInfo.wholeDay == true){
                        whole = true;
                     }
                   
                    // setting the out put period to morning
                        departOutputSession['morning'] = bestLab.name;
                        departOutputSession['wholeDay'] = whole;
                     console.log(`${departmentsInfo.department} has  ${departmentsInfo.course} in ${bestLab.name} on ${departmentsInfo.day} morning wholeDay ${whole}`);
                    // setting choosen lab
                    chosen = bestLab.name;
                    
                   
                     usedLabs.push(bestLab.name);
                 }
                 // lab has not been used so we use the  best lab
                 else{
                   
                     labs.splice(0,1); 
                    // console.log(labs,'labs', labs.length);
                    bestLab = labs[0];
                    if(usedLabs.includes(labs[0].name)){
                        // console.log("lab used");
                        // setting the out put period to morning
                        departOutputSession['morning'] = '_';
                        console.log(`${departmentsInfo.department} cant have   ${departmentsInfo.course}  because the is not suitable lab on ${departmentsInfo.day} morning`);
                        outputUnassignedDepartments.push({day: departmentsInfo.day, department:departmentsInfo.department, course:departmentsInfo.course});
                    }
                    else{
                        // console.log("best lab when not free", bestLab);
                        // setting the out put period to morning
                        let whole = false;
                        if(departmentsInfo.wholeDay == true){
                            whole = true;
                         }
                        departOutputSession['morning'] = bestLab.name;
                        departOutputSession['wholeDay'] = whole;
                    console.log(`${departmentsInfo.department} has  ${departmentsInfo.course} in ${bestLab.name} on ${departmentsInfo.day} morning wholeDay ${whole}`);
                    // setting choosen lab
                   
                    
                    chosen = bestLab.name;
                    usedLabs.push(bestLab.name);
                    }
                    
                 }
             

            }
            // course doesnt need a lab
            else{
                console.log("Lab not needed");
                // getting all classes that are not labs
                let classes = [];
                sectedCampus.classes.forEach((classRoom)=>{
                    if(classRoom.isLaboratory == false){
                        classes.push(classRoom);
                    }
                });
                // console.log(classes);
                let bestClass = {};
                //
                let chosen = ''
                if(!usedClasses.includes(classes[0].name)){
                    bestClass = classes[0];
                    //  console.log("lab is free");
                    
                      // setting the out put period to morning
                      departOutputSession['morning'] = bestClass.name;
                      let whole = false;
                      if(departmentsInfo.wholeDay == true){
                          whole = true;
                       }
                       departOutputSession['wholeDay'] = whole;
                       console.log(`${departmentsInfo.department} has  ${departmentsInfo.course} in ${bestClass.name} on ${departmentsInfo.day} morning wholeDay ${whole}`);
                      // setting choosen class
                    chosen = bestClass.name;
                   
                    
                    usedClasses.push(bestClass.name);
                 }
                 // lab has not been used so we use the next best lab
                 else{
                   
                     classes.splice(0,1); 
                    // console.log(classes,'classes', classes.length);
                    bestClass = classes[0];
                    if(usedClasses.includes(classes[0].name)){
                        // console.log("lab used");
                       
                        if(departmentsInfo.wholeDay){
                            console.log(`${departmentsInfo.department} cant have   ${departmentsInfo.course}  because the is not suitable lab on ${departmentsInfo.day} `);
                            
        
                        }
                        else{
                            console.log(`${departmentsInfo.department} cant have   ${departmentsInfo.course}  because the is not suitable lab on ${departmentsInfo.day} morning`);
                        }
                       
                        outputUnassignedDepartments.push({day: departmentsInfo.day, department:departmentsInfo.department, course:departmentsInfo.course});
                    }
                    else{
                        let whole = false;
                        if(departmentsInfo.wholeDay == true){
                            whole = true;
                         }
                        // console.log("best lab when not free", bestClass);
                    console.log(`${departmentsInfo.department} has  ${departmentsInfo.course} in ${bestClass.name} on ${departmentsInfo.day} morning wholeDay ${whole}`);
                     // setting the out put period to morning
                     departOutputSession['morning'] = bestClass.name;
                     departOutputSession['wholeDay'] = whole;
                     // setting choosen class
                    chosen = bestClass.name;
                    usedClasses.push(bestClass.name);
                    }
                    
                 }
                 
                // console.log(usedClasses);

              
          

            }
        });
        // console.log(dayMorningDepartments[`${element}`]);


    });



 // divide classes to departments in the afternoon from monday to sunday
 let dayAfternoonDepartments = {
        
}
daysInweek.forEach((day)=>{
    // get all courses on thasame morning (monday, tuesday ..... morning);
    let activedayAfternoonDepartments = afternoonClassesAndDepartments.filter((department => department.day == day));
    // make sure you add a day with a classs in the morning 
    if(activedayAfternoonDepartments.length >0){
         dayAfternoonDepartments[`${day}`] = activedayAfternoonDepartments;
    }
   

});
// console.log(dayAfternoonDepartments);

console.log(`

**********************************************
Afternoon
`);
 // share classes to departments in the Afternoon
    Object.keys(dayAfternoonDepartments).forEach(element=>{
        // all departments with classes in a particulaar day in the morning
        let usedLabs = [];
        let usedClasses = [];
        dayAfternoonDepartments[`${element}`].forEach(departmentsInfo => {
            // console.log(departmentsInfo.day);
            
            // console.log(departmentsInfo);
            // getting  

            // assigning a class
            // checking if the course needs a lab
            // getting the correct department from the output array
            let departOutput =  outputArray.find(value => value.name == departmentsInfo.department);
            // setting the output day to affternoon so as to not overide the morning for that same day
            
        let  departOutputSession = departOutput.table[departmentsInfo.day] = departOutput.table[departmentsInfo.day]?  departOutput.table[departmentsInfo.day] : {}
            
            // console.log(wholeDayClasses, "wholledwedfe dafter");
            // console.log(departmentsInfo);
         
            if(departmentsInfo.needsLab ==  true){
                console.log("lab needed");
                // console.log(sectedCampus.classes);
                // selcting an approiprate labo with size constraints 
                // selecting all classes that a laboratories for the course
                let labs = [];
                sectedCampus.classes.forEach((classRoom)=>{
                    if(departmentsInfo.laboratories.includes(classRoom.name)){
                        
                        labs.push(classRoom);
                    }
                });
               
                // getting the best fit lab
                // console.log(labs,'labs before', labs.length);
                let bestLab = {};
                // console.log(labs);
                
                
                // check if lab has   been used
                // console.log(usedLabs);
                 if(!usedLabs.includes(labs[0].name)){
                    bestLab = labs[0];
                    //  console.log("lab is free");
                     console.log(`${departmentsInfo.department} has  ${departmentsInfo.course} in ${bestLab.name} on ${departmentsInfo.day} Afternoon`);
                     // setting the out put period to afternoon
                     departOutputSession['afternoon'] = bestLab.name;
                     usedLabs.push(bestLab.name);
                 }
                 // lab has not been used so we use the next best lab
                 else{
                   
                     labs.splice(0,1); 
                    // console.log(labs,'labs', labs.length);
                    bestLab = labs[0];
                    if(usedLabs.includes(labs[0].name)){
                        
                        // console.log("lab used");
                        console.log(`${departmentsInfo.department} cant have   ${departmentsInfo.course}  because the is not suitable lab on ${departmentsInfo.day} Afternoon`);
                        outputUnassignedDepartments.push({day: departmentsInfo.day, department:departmentsInfo.department, course:departmentsInfo.course});
                        
                    }
                    else{
                        // console.log("best lab when not free", bestLab);
                    console.log(`${departmentsInfo.department} has  ${departmentsInfo.course} in ${bestLab.name} on ${departmentsInfo.day} Afternoon`);
                    // setting the out put period to afternoon
                    departOutputSession['afternoon'] = bestLab.name;
                    usedLabs.push(bestLab.name);
                    }
                    
                 }
                 
                // console.log(usedLabs);
                
          

            }
            // course doesnt need a lab
            else{
                console.log("Lab not needed");
                // getting all classes that are not labs
                let classes = [];
                sectedCampus.classes.forEach((classRoom)=>{
                    if(classRoom.isLaboratory == false){
                        classes.push(classRoom);
                    }
                });
                // console.log(classes);
                let bestClass = {};
                if(!usedClasses.includes(classes[0].name)){
                    bestClass = classes[0];
                    //  console.log("lab is free");
                     console.log(`${departmentsInfo.department} has  ${departmentsInfo.course} in ${bestClass.name} on ${departmentsInfo.day} Afternoon`);
                     // setting the out put period to afternoon
                    departOutputSession['afternoon'] = bestClass.name;
                    usedClasses.push(bestClass.name);
                 }
                 // lab has not been used so we use the next best lab
                 else{
                   
                     classes.splice(0,1); 
                    // console.log(classes,'classes', classes.length);
                    bestClass = classes[0];
                    if(usedClasses.includes(classes[0].name)){
                        // console.log("lab used");
                        console.log(`${departmentsInfo.department} cant have   ${departmentsInfo.course}  because the is not suitable lab on ${departmentsInfo.day} Afternoon`);
                        outputUnassignedDepartments.push({day: departmentsInfo.day, department:departmentsInfo.department, course:departmentsInfo.course});
                    }
                    else{
                        // console.log("best lab when not free", bestClass);
                    console.log(`${departmentsInfo.department} has  ${departmentsInfo.course} in ${bestClass.name} on ${departmentsInfo.day} Afternoon`);
                    // setting the out put period to afternoon
                    departOutputSession['afternoon'] = bestClass.name;
                    usedClasses.push(bestClass.name);
                    }
                    
                 }
                 
                // console.log(usedClasses);



            }
        });
        // console.log(dayMorningDepartments[`${element}`]);


    })

console.log(output);
console.log(outputArray);
console.log(outputUnassignedDepartments, 'unassigned');
}

generateClasroomsTableForACampus('Campus B');