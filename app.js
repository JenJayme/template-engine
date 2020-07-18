const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members, and to create objects for each team member (using the correct classes as blueprints!)

//OBJECT TO HOLD EMPLOYEE DATA
var employeeData = {};
var employees = [];
var addMore;


let typeQuestion = {
    type: "list",
    name: "role",
    message: "Type of employee?",
    choices: ['Manager', 'Engineer', 'Intern']
}

let baseQuestions = [
    {
        type: "input",
        name: "name",
        message: "Please enter the employee name"
    }, {
        type: "input",
        name: "id",
        message: "Please enter the employee ID:"
    }, {
        type: "input",
        name: "email",
        message: "Employee email: "
    }
]

let xqManager = {
    type: "input",
    name: "officeNumber",
    message: "Manager's office number: "
}

let xqEngineer = {
    type: "input",
    name: "gitHubURL",
    message: "Engineer's github URL "
}

let xqIntern = {
    type: "input",
    name: "school",
    message: "Intern's school: "
};

let xqAddMore = {
    type: "confirm",
    name: "addMore",
    message: "Add another employee?"
};

function customizeQuestions (xqSet) {
    questions = baseQuestions.concat(xqSet, xqAddMore);
    return questions;
};

var engineerQuestions = customizeQuestions(xqEngineer);
var internQuestions = customizeQuestions(xqIntern);
var managerQuestions = customizeQuestions(xqManager);

function askType() {
        inquirer.prompt(typeQuestion).then(function(answers) {
            if (answers.role === 'Engineer') {
                ask(engineerQuestions)
            } else if (answers.role === 'Manager') {
                ask(managerQuestions)
            } else {
                ask(internQuestions)
            }
        })
}

function ask() {
    inquirer.prompt(questions).then((answers) => {
      var employeeData = answers;
          employeeData.role = answers.role,
          employeeData.name = answers.name,
          employeeData.id = answers.id,
          employeeData.email = answers.email,
          console.log("employeeData: ", employeeData);
          employees.push(empToAdd);
      if (answers.addMore) {
        addMore = true;
      } else {
        addMore = false;
        console.log('Your answers are saved!');
        return employeeData;
      }
    });
  }

// function batchEnter() {
//     if (addMore) { 
//         askType()
//       } else {
//         console.log('Your answers are saved!');
//       }
// };

function createEmployeeRecords(employees) {
    if (employeeData.role === 'Engineer') {
        var employee = new Engineer(employeeData.name, employeeData.id, employeeData.email, employeeData.github)
    } else if (employeeData.role === 'Manager') {
        var employee = new Manager(employeeData.name, employeeData.id, employeeData.email, employeeData.officeNumber)
    } else {
        var employee = new Intern(employeeData.name, employeeData.id, employeeData.email, employeeData.school)
    };
};

// After the user has input all employees desired, call the `render` function (required above) and pass in an array containing all employee objects; the `render` function will generate and return a block of HTML including templated divs for each employee!


// After you have your html, you're now ready to create an HTML file using the HTML returned from the `render` function. Now write it to a file named `team.html` in the output` folder. You can use the variable `outputPath` above target this location.

// Hint: you may need to check if the `output` folder exists and create it if it does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different information; write your code to ask different questions via inquirer depending on employee type.

// HINT: make sure to build out your classes first! Remember that your Manager Engineer, and Intern classes should all extend from a class named Employee; see the directions for further information. Be sure to test out each class and verify it generates an object with the correct structure and methods. This structure will be crucial in order for the provided `render` function to work!

//====================================================

async function init() {

    await askType();
    createEmployeeRecords(employees);

    var html = render(employees)
    fs.writeFile(outputPath, html, err => {
        if (err) {
            throw err
        }
        else {
        console.log("Your team page has been successfully created! Check the output folder.")
        }
    })
};

init()