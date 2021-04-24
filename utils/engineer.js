const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, empID, email, gitHubUsername) {
        super(name, empID, email);
        this.gitHubUsername = gitHubUsername;
    }
}

module.exports = Engineer;