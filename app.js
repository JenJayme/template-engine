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

//VARIABLE TO GENERATE ID #s BY ADDING

let questions = [
    {
        type: "input",
        name: "name",
        message: "Please enter the employee name"
    }, {
        type: "list",
        name: "role",
        message: "Type of employee?",
        choices: ['Manager', 'Engineer', 'Intern']
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

let questionManager = {
    type: "input",
    name: "officeNumber",
    message: "Manager's office number: "
}

let questionEngineer = {
    type: "input",
    name: "gitHubURL",
    message: "Engineer's github URL "
}

let questionIntern = {
    type: "input",
    name: "school",
    message: "Intern's school: "
}

// function AddEmployee() {
//     return inquirer.prompt(questions).then(function (userInput) {
//         console.log("userInput: ", userInput);
//         var employeeData = userInput;
//             employeeData.name = userInput.name,
//             employeeData.role = userInput.role,
//             employeeData.id = userInput.id,
//             employeeData.email = userInput.email,
//             console.log("employeeData: ", employeeData);
//         employees.push(empToAdd);
//         console.log("Employees: " + employees);
//         return employees;
//     })
// };

function ask() {
    return inquirer.prompt(questions).then((answers) => {
    //   employees.push(answers);
      console.log("userInput: ", userInput);
      var employeeData = userInput;
          employeeData.name = userInput.name,
          employeeData.role = userInput.role,
          employeeData.id = userInput.id,
          employeeData.email = userInput.email,
          console.log("employeeData: ", employeeData);
          employees.push(empToAdd);
      if (answers.addMore) { 
        ask()
      } else {
        console.log('Your answers are saved!');
        return employees;
      }
    });
  }
            // employeeData.officeNumber = userInput.officeNumber,
            // employeeData.gitHubURL = userInput.gitHubURL,
            // employeeData.school = userInput.school,

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

async function init() {
    await ask();
    render();
}

async function init() {

    var moreEmployees = 'yes';
    var id_tracker = 1;
    const employee_list = [];

while (moreEmployees === 'yes') {
    try {
        const { role } = await inquirer.prompt([
            { type: "list", message: "Which kind of employee would you like to add?", choices: ["Engineer", "Intern", "Office Manager"], name: "role" }
        ])

        const arguments = [];

        var general_responses = await inquirer.prompt([
            { type: "input", message: `What is the name of the ${role}?`, name: "name" },
            { type: "input", message: `What is the email of the ${role}?`, name: "email" }
        ])

        arguments.push(general_responses.name);
        arguments.push(id_tracker);
        id_tracker += 1;
        arguments.push(general_responses.email);

        var employee;

        if (role === "Engineer") {
            var response = await inquirer.prompt({ type: "input", message: "What is the engineer's Github username?", name: "github" })
            arguments.push(response.github)
            employee = new Engineer(...arguments)
        }
        else if (role === "Intern") {
            var response = await inquirer.prompt({ type: "input", message: "Where does the intern go to school?", name: "school" })
            arguments.push(response.school)
            employee = new Intern(...arguments)
        }
        else if (role === "Office Manager") {
            var response = await inquirer.prompt({ type: "input", message: "What is the office manager's room number?", name: "room_number" })
            arguments.push(response.room_number)
            employee = new Manager(...arguments)
        }

        employee_list.push(employee)

        var ask_again = await inquirer.prompt({type:"list", message:"Do you want to add another employee?", choices:['yes', 'no'], name:"again"})
        moreEmployees = ask_again.again




    } catch (error) {
        throw error
    }
}
var html = render(employee_list)
fs.writeFile(outputPath, html, err => {
    if (err) {
        throw err
    }
    else {
        console.log("Successfully created HTML file in the output folder.")
    }
})
}

init()