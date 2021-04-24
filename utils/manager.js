const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, empID, email, officeNum) {
        super(name, empID, email);
        this.officeNum = officeNum;
    }
}

module.exports = Manager;