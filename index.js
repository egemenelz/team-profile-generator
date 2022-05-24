const inquirer = require('inquirer');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const templateData = require('./src/page-template');
const { writeFile, copyFile } = require('./src/generate-site');

// EmailRegex for validate the email structure
var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Empty team array for adding every team members inside and write to page-template
const team = [];

// Questions for every role
const questions = [
    'What is your name?',
    'What is your employee ID ?',
    'What is your email address ?',
    'What is your Github account ?',
    'What is your School Name ?',
    'What is your office number ?'
]

// Enter manager info with help of inquirer thru CLI
function managerInfo() {
    console.log(`
    =================
    Add a New Manager
    =================
    `);
    return inquirer
        .prompt([
            {
                type: 'text',
                name: 'name',
                message: questions[0],
                validate: questionInput => {
                    if (questionInput) { return true; } else { console.log('Please enter your name!!'); return false; }
                }
            },
            {
                type: 'text',
                name: 'id',
                message: questions[1],
                validate: questionInput => {
                    if (/^\d+$/.test(questionInput)) { return true; } else { console.log('Please enter your id number!!'); return false; }
                }
            },
            {
                type: 'text',
                name: 'email',
                message: questions[2],
                validate: questionInput => {
                    if (emailRegex.test(questionInput)) { return true; } else { console.log('Please enter valid email address!!'); return false; }
                }
            },
            {
                type: 'text',
                name: 'officeNo',
                message: questions[5],
                validate: questionInput => {
                    if (/^\d+$/.test(questionInput)) { return true; } else { console.log('Please enter your office number!!'); return false; }
                }
            }
        ])
        .then(answers => {
            const { name, id, email, officeNo } = answers;
            const manager = new Manager(name, id, email, officeNo)
            team.push(manager);
            addNew();
        })

}


// Enter engineer info with help of inquirer thru CLI
function engineerInfo() {
    console.log(`
    ==================
    Add a New Engineer
    ==================
    `);
    return inquirer
        .prompt([
            {
                type: 'text',
                name: 'name',
                message: questions[0],
                validate: questionInput => {
                    if (questionInput) { return true; } else { console.log('Please enter your name!!'); return false; }
                }
            },
            {
                type: 'text',
                name: 'id',
                message: questions[1],
                validate: questionInput => {
                    if (/^\d+$/.test(questionInput)) { return true; } else { console.log('Please enter integer!!'); return false; }
                }
            },
            {
                type: 'text',
                name: 'email',
                message: questions[2],
                validate: questionInput => {
                    if (emailRegex.test(questionInput)) { return true; } else { console.log('Please enter your email address!!'); return false; }
                }
            },
            {
                type: 'text',
                name: 'github',
                message: questions[3],
                validate: questionInput => {
                    if (questionInput) { return true; } else { console.log('Please enter your gitHub account!!'); return false; }
                }
            }
        ])
        .then(answers => {
            const { name, id, email, github } = answers;
            const engineer = new Engineer(name, id, email, github)
            team.push(engineer)
            addNew();
        })
}

// Enter interm info with help of inquirer thru CLI
function internInfo() {
    console.log(`
    ================
    Add a New Intern
    ================
    `);
    return inquirer
        .prompt([
            {
                type: 'text',
                name: 'name',
                message: questions[0],
                validate: questionInput => {
                    if (questionInput) { return true; } else { console.log('Please enter your name!!'); return false; }
                }
            },
            {
                type: 'text',
                name: 'id',
                message: questions[1],
                validate: questionInput => {
                    if (/^\d+$/.test(questionInput)) { return true; } else { console.log('Please enter your employee ID!!'); return false; }
                }
            },
            {
                type: 'text',
                name: 'email',
                message: questions[2],
                validate: questionInput => {
                    if (emailRegex.test(questionInput)) { return true; } else { console.log('Please enter your email address!!'); return false; }
                }
            },
            {
                type: 'text',
                name: 'school',
                message: questions[4],
                validate: questionInput => {
                    if (questionInput) { return true; } else { console.log('Please enter your School Name!!'); return false; }
                }
            }
        ])
        .then(answers => {
            const { name, id, email, school } = answers;
            const intern = new Intern(name, id, email, school);
            team.push(intern);
            addNew();
        })
}

// Quastinare for next move,
function addNew() {
    console.log(`
    ======================
    Think Before Answer It 
    ======================
    `);

    return inquirer
        .prompt({
            type: 'list',
            name: 'addOrFinish',
            choices: ['Add New Engineer', 'Add New Intern', 'Finish the Building Team']
        })
        .then(({ addOrFinish }) => {
            if (addOrFinish === 'Add New Engineer') {
                engineerInfo();
            } else if (addOrFinish === 'Add New Intern') {
                internInfo();
            } else {
                console.log('You are done with building team.. Thanks!');
                console.log('You can find the index.html inside the dist folder');
                console.log(team)
                writeFile(templateData(team));
                copyFile();
            }
        })
}

// Kicks off the application
managerInfo();