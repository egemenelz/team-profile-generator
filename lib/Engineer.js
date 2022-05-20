const Employee = require("./Employee");
const inquirer = require('inquirer');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }
    getRole() {
        return Engineer;
    }
    getGithub() {
        return `The github accounts of manager is ${this.github}`
    }

    
}


module.exports = Engineer;