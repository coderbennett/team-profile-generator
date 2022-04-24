const inquirer = require('inquirer');

const menuQuestions = [
    {
        type: "list",
        message: "Would you like to add another team member?",
        choices: ["Add Engineer", new inquirer.Separator(), "Add Intern", new inquirer.Separator(), "Finish team builder"],
        name: "menuChoice"
    }
];

const managerQuestions = [
    {
        type: "input",
        message: "Who is the manager of your team?",
        name: "managerName"
    },
    {
        type: "input",
        message: "What is the manager's employee ID?",
        name: "managerId"
    },
    {
        type: "input",
        message: "What is the manager's email address?",
        name: "managerEmail"
    },
    {
        type: "input",
        message: "What is the manager's office number?",
        name: "managerOffice"
    }

];

const engineerQuestions = [
    {
        type: "input",
        message: "What is the name of this engineer?",
        name: "engineerName"
    },
    {
        type: "input",
        message: "What is this engineer's employee ID?",
        name: "engineerId"
    },
    {
        type: "input",
        message: "What is this engineer's email address?",
        name: "engineerEmail"
    },
    {
        type: "input",
        message: "What is this engineer's github username?",
        name: "engineerGithub"
    }
];

const internQuestions = [
    {
        type: "input",
        message: "What is the name of this intern?",
        name: "internName"
    },
    {
        type: "input",
        message: "What is this intern's employee ID?",
        name: "internId"
    },
    {
        type: "input",
        message: "What is this intern's email address?",
        name: "internEmail"
    },
    {
        type: "input",
        message: "What school does this intern go to?",
        name: "internSchool"
    }
];

module.exports = {
    menuQuestions: menuQuestions,
    managerQuestions: managerQuestions,
    engineerQuestions: engineerQuestions,
    internQuestions: internQuestions
};