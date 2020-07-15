const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//OBJECT TO HOLD EMPLOYEE DATA
const employees = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

let questions = [
        {
            type: "input",
            name: "name",
            message: "Please enter the employee name"
        }, {
            type: "input",
            name: "role",
            message: "Is employee a (1) Manager, (2) Engineer, or (3) Intern?"
        }, {
            type: "input",
            name: "id",
            message: "Please enter the employee ID:"
        }, {
            type: "input",
            name: "title",
            message: "Employee position: "
        }, {
            type: "input",
            name: "email",
            message: "Employee email: "
        }, {
            type: "input",
            name: "officeNumber",
            message: "Manager's office number: "
        }, {
            type: "input",
            name: "gitHubURL",
            message: "Engineer's github URL "
        }, {
            type: "input",
            name: "school",
            message: "Intern's school: "
        }
]

function Employee(name, role, id, title, email) {
    return inquirer.prompt(questions).then(function (userInput) {
        console.log("userInput: ", userInput);
        employees.name = userInput.name,
        employees.id = userInput.id,
        employees.email = userInput.email,
        employees.role = userInput.role,
        employees.officeNumber = userInput.officeNumber,
        employees.gitHubURL = userInput.gitHubURL,
        employees.school = userInput.school,
        console.log("employeeData: ", this);
    })
};

// The first class is an `Employee` parent class with the following properties and methods:

Employee.prototype.printInfo = function() {
    console.log("Name: " + this.name + "\nRole: " + this.role +"\nID: " + this.id + "\nTitle: " + this.title + "\nEmail: " + this.email +"\nOffice Number " + this.officeNumber + "\nGit Hub URL: " + this.gitHubURL + "\nSchool: " + this.school)
  };

Employee.prototype.LogInfo = function LogInfo() {
    console.log(`${this.name} has ${this.hp} hit points and ${this.strength} strength`);
};


// creates two unique employees using the "employee" constructor
var michaelScott = new Employee("Michael Scott", "Manager", 25586, "Regional Manager", "mscott@dundermifflin.com");

var dwightSchrute = new Employee("Michael Scott", "Manager", 25586, "Original Assistant to the Regional Manager", "dschrute@dundermifflin.com");

console.log(employees);

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

//====================================================

// async function init() {
//     Employee();
    // await getEmployeeData();
    // writeFile(employeeData);
// } 
