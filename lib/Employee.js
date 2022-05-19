const inquirer = require('inquirer');

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        // this.questions = ['What is your name?', 'What is your employee ID ?', 'What is your email address ?', 'What is your office number ?', 'What would you like to do ?']
    }

    getName() {
        return `The name of Employee is ${this.name}`
    }

    getId() {
        return `The id of Employee is ${this.id}`
    }

    getEmail() {
        return `The email of Employee is ${this.email}`
    }

    getRole() {
        return Employee;
    }

    addNew() {
        inquirer
            .prompt({
                type: 'list',
                name: 'addQuestion',
                message: this.questions[4],
                choices: ['Add New Engineer', 'Add New Intern', 'Finish Building Team']
            })
            .then(({ addQuestion }) => {
                if (addQuestion === 'Add New Engineer') {
                    return this.engineerInfo();
                } else if (addQuestion === 'Add New Intern') {
                    return this.internInfo();
                }
            })
    }

    engineerInfo() {

    }

    internInfo() {

    }
}

module.exports = Employee;