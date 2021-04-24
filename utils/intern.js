const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, empID, email, school) {
        super(name, empID, email);
        this.school = school;
    }
}

module.exports = Intern;