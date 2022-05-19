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

    internInfo() {
        inquirer
            .prompt(
                {
                    type: 'text',
                    name: 'internName',
                    message: 'What is your name?',
                    validate: questionInput => {
                        if (questionInput) { return true; } else { console.log('Please enter your name!!'); return false; }
                    }
                },
                {
                    type: 'text',
                    name: 'internID',
                    message: 'What is your employee ID ?',
                    validate: questionInput => {
                        if (questionInput) { return true; } else { console.log('Please enter your employee ID!!'); return false; }
                    }
                },
                {
                    type: 'text',
                    name: 'internEmail',
                    message: 'What is your email address ?',
                    validate: questionInput => {
                        if (questionInput) { return true; } else { console.log('Please enter your email address!!'); return false; }
                    }
                },
                {
                    type: 'text',
                    name: 'internSchool',
                    message: 'What is your School Name ?',
                    validate: questionInput => {
                        if (questionInput) { return true; } else { console.log('Please enter your School Name!!'); return false; }
                    }
                })
            .then(({ internName, internID, internEmail, internSchool }) => {
                this.Intern = new Intern(internName, internID, internEmail, internSchool)
                this.addNew();
            })
    }
}

module.exports = Intern;