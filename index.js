// include the inquirer and filesystem packages
const inquirer = require('inquirer');
const fs = require('fs');

// include the ./utils files
const Intern = require('./utils/intern');
const Engineer = require('./utils/engineer');
const Manager = require('./utils/manager');
const generateHTML = require('./utils/generateHTML');

// global vars
const empArr = [];
let teamName;
let outputFile = './output/index.html';

// get team name and set it to global variable, then call getManager()
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

// get manager info, create an instance of Manager and push it on global array. then call showEmpMenu()
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

// show menu and call appropriate function based on user input. if user selects Finished, generate the HTML and save it to file
function showEmpMenu() {
    const question = [
        {
            type: 'list',
            message: 'What would you like to do next?',
            choices: ['Add an Engineer', 'Add an Intern', 'Finished'],
            name: 'menuChoice'
        }
    ];

    inquirer
        .prompt(question)
        .then((answer) => {
            switch (answer.menuChoice) {
                case 'Add an Engineer':
                    addEngineer();
                    break;
                case 'Add an Intern':
                    addIntern();
                    break;
                case 'Finished':
                    const generatedHTML = generateHTML(teamName, empArr);
                    writeToFile(outputFile, generatedHTML);
                    break;
            }
        })
}

// write generated HTML to file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success! Your generated results are in the /output directory.')
    );
}

// get intern info, create an Intern instance and push it on global array. then call showEmpMenu()
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
    ];

    inquirer
        .prompt(questions)
        .then((answers) => {
            const intern = new Intern(answers.internName, answers.internEmpID, answers.internEmail, answers.internSchool);
            empArr.push(intern);
            showEmpMenu();
        });
}

// get engineer info, create an instance of Engineer and push it on global array.  then call showEmpMenu()
function addEngineer() {
    questions = [
        {
            type: 'input',
            message: "What is the Engineer's name?",
            name: 'engineerName'
        },
        {
            type: 'input',
            message: "What is the Engineer's employee ID?",
            name: 'engineerEmpID'
        },
        {
            type: 'input',
            message: "What is the Engineer's email address?",
            name: 'engineerEmail'
        },
        {
            type: 'input',
            message: "What is the Engineer's gitHub username?",
            name: 'engineerGitHubUsername'
        }
    ];

    inquirer
        .prompt(questions)
        .then((answers) => {
            const engineer = new Engineer(answers.engineerName, answers.engineerEmpID, answers.engineerEmail, answers.engineerGitHubUsername);
            empArr.push(engineer);
            showEmpMenu();
        });

}

// call getTeam to start processing user input
getTeamName();