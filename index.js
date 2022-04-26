const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const questions = require('./src/questions');
const generateHTML = require('./src/generateHTML');
const inquirer = require('inquirer');
const fs = require('fs');

//initialize team array, to hold each team member object inside
const team = [];

//call the inquire user manager function to start asking the user questions about the team
inquireUserManager();

//this function pulls from the questions.js file, the managerQuestions array specifically
//to inquire the user about the manager on the team
//once the questions have been answered we call the menu questions
function inquireUserManager() {
    inquirer
        .prompt(questions.managerQuestions)
        .then((response) => {
            team[0] = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOffice);
            inquireUserMenu();
        });
};


//the inquire user menu method pulls the menu questions to let the user
//choose what to do next, then it calls the corresponding function
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