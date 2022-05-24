const inquirer = require('inquirer');

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        // this.questions = ['What is your name?', 'What is your employee ID ?', 'What is your email address ?', 'What is your office number ?', 'What would you like to do ?']
    }

    getName() {
        return `${this.name}`
    }

    getId() {
        return `${this.id}`
    }

    getEmail() {
        return `${this.email}`
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee;