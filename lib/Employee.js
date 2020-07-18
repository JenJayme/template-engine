// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, role, id, email) {
        this.name = name;
        this.role = role;
        this.id = id;
        this.email = email;
    };

    getName = function () {
    return name
    };

    getId = function () {
        return id
    };

    getEmail = function () {
        return email
    };

    getRole = function () {
        return role
    };

}

// export default Employee;
module.exports = Employee;