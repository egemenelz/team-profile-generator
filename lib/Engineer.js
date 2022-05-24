const Employee = require("./Employee");


/**
 * Extended some of variable from super class Employee
 * as extra to Employee class
 * This class has getter method for return to Github
 */
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }
    getRole() {
        return "Engineer";
    }
    getGithub() {
        return `${this.github}`
    }

    
}


module.exports = Engineer;