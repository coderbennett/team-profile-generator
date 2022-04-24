const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');

const team = [];

const managerQuestions = [
    {
        type: "input",
        message: "Who is the manager of your team?",
        name: "manager-name"
    },
    {
        type: "input",
        message: "What is the manager's employee ID?",
        name: "manager-id"
    },
    {
        type: "input",
        message: "What is the manager's email address?",
        name: "manager-email"
    },
    {
        type: "input",
        message: "What is the manager's office number?",
        name: "manager-office"
    }

];

const menuQuestions = [
    {
        type: "list",
        message: "Would you like to add another team member?",
        options: ["Add Engineer", new inquirer.Separator(), "Add Intern", new inquirer.Separator(), "Finish team builder"],
        name: "menu-choice"
    }
];

const engineerQuestions = [
    {
        type: "input",
        message: "What is the name of this engineer?",
        name: "engineer-name"
    },
    {
        type: "input",
        message: "What is this engineer's employee ID?",
        name: "engineer-id"
    },
    {
        type: "input",
        message: "What is this engineer's email address?",
        name: "engineer-email"
    },
    {
        type: "input",
        message: "What is this engineer's github username?",
        name: "engineer-github"
    }
];

const internQuestions = [
    {
        type: "input",
        message: "What is the name of this intern?",
        name: "intern-name"
    },
    {
        type: "input",
        message: "What is this intern's employee ID?",
        name: "intern-id"
    },
    {
        type: "input",
        message: "What is this intern's email address?",
        name: "intern-email"
    },
    {
        type: "input",
        message: "What school does this intern go to?",
        name: "intern-school"
    }
];
