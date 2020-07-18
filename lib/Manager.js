// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

var Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        this.officeNumber = officeNumber
        this.role = "Manager"
        super(name, id, email);
    }

    getOfficeNumber() {
        return this.officeNumber
    }
}

module.exports = Manager