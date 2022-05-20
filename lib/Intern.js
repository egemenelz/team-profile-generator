const Employee = require("./Employee");
const inquirer = require('inquirer');


class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
    }

    getRole() {
        return Intern;
    }
    getSchool() {
        return `This is school of Inter ${this.school}`
    }

    
}

module.exports = Intern;