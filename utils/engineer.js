const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, empID, email, gitHubUsername) {
        super(name, empID, email);
        this.gitHubUsername = gitHubUsername;
    }

    getGitHub() {
        return this.gitHubUsername;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;