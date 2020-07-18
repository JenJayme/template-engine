// AddEmployee.prototype.printInfo = function() {
//     console.log("Name: " + this.name + "\nRole: " + this.role +"\nID: " + this.id + "\nTitle: " + this.title + "\nEmail: " + this.email +"\nOffice Number " + this.officeNumber + "\nGit Hub URL: " + this.gitHubURL + "\nSchool: " + this.school)
//   };

// Employee.prototype.LogInfo = function LogInfo() {
//     console.log(`${this.name} has ${this.hp} hit points and ${this.strength} strength`);
// };

// creates two unique employees using the "employee" constructor
// var michaelScott = new AddEmployee("Michael Scott", "Manager", 25586, "mscott@dundermifflin.com");
// var dwightSchrute = new AddEmployee("Michael Scott", "Manager", 18740, "dschrute@dundermifflin.com");

function printInfo(name) {
    console.log(`Employee Info:`);
    console.log(`Name: ${employeeData.name}`);
    console.log(`Role: ${employeeData.role}`);
    console.log(`Email: ${employeeData.email}`);
    console.log(`ID: ${employeeData.id}`);
    console.log("------------");
  }