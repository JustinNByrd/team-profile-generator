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
            showEmpMenu();
        })
}

function showEmpMenu() {
    const question = [
        {
            type: 'list',
            message: 'What would you like to do next?',
            choices: ['Add an Engineer', 'Add an Intern', 'Finished'],
            name: 'menuChoice'
        }
    ]

    inquirer
        .prompt(question)
        .then((answer) => {
            switch (answer.menuChoice) {
                case 'Add an Engineer':
                    console.log(answer.menuChoice);
                    break;
                case 'Add an Intern':
                    addIntern();
                    break;
                case 'Finished':
                    console.log(answer.menuChoice);
                    break;
            }
        })
}

function addIntern() {
    const questions = [
        {
            type: 'input',
            message: "What is the intern's name?",
            name: "internName"
        },
        {
            type: 'input',
            message: "What is the intern's employee ID?",
            name: "internEmpID"
        },
        {
            type: 'input',
            message: "What is the intern's email address?",
            name: "internEmail"
        },
        {
            type: 'input',
            message: "What is the intern's school?",
            name: "internSchool"
        }
    ]

    inquirer
        .prompt(questions)
        .then((answers) => {
            const intern = new Intern(answers.internName, answers.internEmpID, answers.internEmail, answers.internSchool);
            empArr.push(intern);
            showEmpMenu();
        })
}

getTeamName();