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
    
    
}

module.exports = Manager;
