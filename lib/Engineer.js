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

    engineerInfo() {
        inquirer
            .prompt(
                {
                    type: 'text',
                    name: 'engineerName',
                    message: 'What is your name?',
                    validate: questionInput => {
                        if (questionInput) { return true; } else { console.log('Please enter your name!!'); return false; }
                    }
                },
                {
                    type: 'text',
                    name: 'engineerID',
                    message: 'What is your employee ID ?',
                    validate: questionInput => {
                        if (questionInput) { return true; } else { console.log('Please enter your employee ID!!'); return false; }
                    }
                },
                {
                    type: 'text',
                    name: 'engineerEmail',
                    message: 'What is your email address ?',
                    validate: questionInput => {
                        if (questionInput) { return true; } else { console.log('Please enter your email address!!'); return false; }
                    }
                },
                {
                    type: 'text',
                    name: 'engineerGithub',
                    message: 'What is your Github account ?',
                    validate: questionInput => {
                        if (questionInput) { return true; } else { console.log('Please enter your gitHub account!!'); return false; }
                    }
                })
            .then(({ engineerName, engineerID, engineerEmail, engineerSchool }) => {
                this.Engineer = new Engineer(engineerName, engineerID, engineerEmail, engineerSchool)
                this.addNew();
            })
    }
}


module.exports = Engineer;