const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const questions = require('./src/questions');
const generateHTML = require('./src/generateHTML');
const inquirer = require('inquirer');
const fs = require('fs');

const team = [];

inquireUserManager();

function inquireUserManager() {
    inquirer
        .prompt(questions.managerQuestions)
        .then((response) => {
            team[0] = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOffice);
            inquireUserMenu();
        });
};

function inquireUserMenu() {
    inquirer
        .prompt(questions.menuQuestions)
        .then((response) => {
            if (response.menuChoice === "Add Engineer") {
                inquireUserEngineer();
            } else if (response.menuChoice === "Add Intern") {
                inquireUserIntern();
            } else {
                console.log("Building team. . .");
                console.log(team);
                fs.writeFile('index.html', new generateHTML(team).generateContent(), (err) => {
                });
            }
        });
};

function inquireUserEngineer() {
    inquirer
        .prompt(questions.engineerQuestions)
        .then((response) => {
            team.push(new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub));
            inquireUserMenu();
        });
};

function inquireUserIntern() {
    inquirer
        .prompt(questions.internQuestions)
        .then((response) => {
            team.push(new Intern(response.internName, response.internId, response.internEmail, response.internSchool));
            inquireUserMenu();
        });
}