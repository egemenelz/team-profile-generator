const Employee = require('./Employee');


/**
 * Extended some of variable from super class Employee
 * as extra to Employee class
 * This class has getter method for return to Office number of Manager
 */
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
    }

    getRole(){
        return "Manager";
    }

    getOfficeNumber(){
        return `${this.officeNumber}`
    }
    
    
}

module.exports = Manager;
