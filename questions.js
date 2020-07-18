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
    }, {
        type: "confirm",
        name: "addMore",
        message: "Add another employee?"
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

console.log(engineerQuestions);