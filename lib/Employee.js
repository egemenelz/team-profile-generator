const inquirer = require('inquirer');

/**
 * Main class of team project
 * this class has shared variables throught out the project
 * and the other classes extends class
 */

class Employee {
    /**
     * Constructor of Employee object
     * defined name, id, email inside here
     * @param {*} name 
     * @param {*} id 
     * @param {*} email 
     */
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }


    // Return the Employee object name
    getName() {
        return `${this.name}`
    }

    // Return the Employee object id
    getId() {
        return `${this.id}`
    }

    // Return the Employee object email
    getEmail() {
        return `${this.email}`
    }

    // Return the Employee object role
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;