// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

var Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, email, id, school) {
        this.school = school
        this.role = "Intern"
        super(name, email, id)
    }

    getSchool() {
        return this.school
    }
}

module.exports = Intern