const inquirer = require('inquirer');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const tempData = require('./src/page-template')
const { writeFile, copyFile } = require('./src/generate-site')

const team = [];

const questions = [
    'What is your name?',
    'What is your employee ID ?',
    'What is your email address ?',
    'What is your Github account ?',
    'What is your School Name ?',
    'What is your office number ?'
]

function managerInfo() {
    inquirer
        .prompt(
            {
                type: 'text',
                name: 'managerName',
                message: questions[0],
                validate: questionInput => {
                    if (questionInput) { return true; } else { console.log('Please enter your name!!'); return false; }
                }
            },
            {
                type: 'text',
                name: 'managerID',
                message: questions[1],
                validate: questionInput => {
                    if (questionInput) { return true; } else { console.log('Please enter your employee ID!!'); return false; }
                }
            },
            {
                type: 'text',
                name: 'managerEmail',
                message: questions[2],
                validate: questionInput => {
                    if (questionInput) { return true; } else { console.log('Please enter your email address!!'); return false; }
                }
            },
            {
                type: 'text',
                name: 'managerOfficeNo',
                message: questions[5],
                validate: questionInput => {
                    if (questionInput) { return true; } else { console.log('Please enter your office number!!'); return false; }
                }
            })
        .then(({ managerName, managerID, managerEmail, managerOfficeNo }) => {
            this.manager = new Manager(managerName, managerID, managerEmail, managerOfficeNo)
        })

}

function engineerInfo() {
    inquirer
        .prompt(
            {
                type: 'text',
                name: 'engineerName',
                message: questions[0],
                validate: questionInput => {
                    if (questionInput) { return true; } else { console.log('Please enter your name!!'); return false; }
                }
            },
            {
                type: 'text',
                name: 'engineerID',
                message: questions[1],
                validate: questionInput => {
                    if (questionInput) { return true; } else { console.log('Please enter your employee ID!!'); return false; }
                }
            },
            {
                type: 'text',
                name: 'engineerEmail',
                message: questions[2],
                validate: questionInput => {
                    if (questionInput) { return true; } else { console.log('Please enter your email address!!'); return false; }
                }
            },
            {
                type: 'text',
                name: 'engineerGithub',
                message: questions[3],
                validate: questionInput => {
                    if (questionInput) { return true; } else { console.log('Please enter your gitHub account!!'); return false; }
                }
            })
        .then(({ engineerName, engineerID, engineerEmail, engineerSchool }) => {
            this.Engineer = new Engineer(engineerName, engineerID, engineerEmail, engineerSchool)
            this.addNew();
        })
}
function internInfo() {
    inquirer
        .prompt(
            {
                type: 'text',
                name: 'internName',
                message: questions[0],
                validate: questionInput => {
                    if (questionInput) { return true; } else { console.log('Please enter your name!!'); return false; }
                }
            },
            {
                type: 'text',
                name: 'internID',
                message: questions[1],
                validate: questionInput => {
                    if (questionInput) { return true; } else { console.log('Please enter your employee ID!!'); return false; }
                }
            },
            {
                type: 'text',
                name: 'internEmail',
                message: questions[2],
                validate: questionInput => {
                    if (questionInput) { return true; } else { console.log('Please enter your email address!!'); return false; }
                }
            },
            {
                type: 'text',
                name: 'internSchool',
                message: questions[4],
                validate: questionInput => {
                    if (questionInput) { return true; } else { console.log('Please enter your School Name!!'); return false; }
                }
            })
        .then(({ internName, internID, internEmail, internSchool }) => {
            this.Intern = new Intern(internName, internID, internEmail, internSchool)
            this.addNew();
        })
}

function addNew() {
    inquirer
        .prompt({
            type: 'list',
            name: 'addOrFinish',
            choice: ['Add New Engineer', 'Add New Intern', 'Finish the Building Team']
        })
        .then(({ addOrFinish }) => {
            if (addOrFinish === 'Add New Engineer') {
                engineerInfo();
            } else if (addOrFinish === 'Add New Intern') {
                internInfo();
            } else {
                console.log('You are done with building team.. Thanks!');
                console.log('You can find the index.html inside the dist folder');
            }
        })
}


