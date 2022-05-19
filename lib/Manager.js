const Employee = require('./Employee');
const inquirer = require('inquirer');


class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
    }

    getRole(){
        return Manager;
    }

    getOfficeNumber(){
        return `This is office number of Manager ${this.officeNumber}`
    }
    
    managerInfo() {
        inquirer
            .prompt(
                {
                    type: 'text',
                    name: 'managerName',
                    message: 'What is your name?',
                    validate: questionInput => {
                        if (questionInput) { return true; } else { console.log('Please enter your name!!'); return false; }
                    }
                },
                {
                    type: 'text',
                    name: 'managerID',
                    message: 'What is your employee ID ?',
                    validate: questionInput => {
                        if (questionInput) { return true; } else { console.log('Please enter your employee ID!!'); return false; }
                    }
                },
                {
                    type: 'text',
                    name: 'managerEmail',
                    message: 'What is your email address ?',
                    validate: questionInput => {
                        if (questionInput) { return true; } else { console.log('Please enter your email address!!'); return false; }
                    }
                },
                {
                    type: 'text',
                    name: 'managerOfficeNo',
                    message: 'What is your office number ?',
                    validate: questionInput => {
                        if (questionInput) { return true; } else { console.log('Please enter your office number!!'); return false; }
                    }
                })
            .then(({ managerName, managerID, managerEmail, managerOfficeNo }) => {
                this.manager = new Manager(managerName, managerID, managerEmail, managerOfficeNo)
            })

    }
}

module.exports = Manager;
