// include the inquirer and filesystem packages
const inquirer = require('inquirer');
const fs = require('fs');

// include the ./utils files
const Intern = require('./utils/intern');
const Engineer = require('./utils/engineer');
const Manager = require('./utils/manager');

// global vars
const empArr = [];
var teamName;

function getTeamName() {
    const question = [
        {
            type: 'input',
            message: "What is your team's name?",
            name: 'teamName'
        }
    ]

    inquirer
        .prompt(question)
        .then((answer) => {
            teamName = answer.teamName;
            getManager();
        })
}

function getManager() {
    const questions = [
        {
            type: 'input',
            message: "What is the manager's name?",
            name: "managerName"
        },
        {
            type: 'input',
            message: "What is the manager's employee ID?",
            name: "empID"
        },
        {
            type: 'input',
            message: "What is the manager's email address?",
            name: "email"
        },
        {
            type: 'input',
            message: "What is the manager's office number?",
            name: "officeNum"
        }
    ];

    inquirer
        .prompt(questions)
        .then((response) => {
            const manager = new Manager(response.managerName, response.empID, response.email, response.officeNum);
            empArr.push(manager);
        });
}

getTeamName();