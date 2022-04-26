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
            if(response.managerName === null || response.managerName === "") {
                console.log("Incorrect response format, please try again.");
                inquireUserManager();
            } else if (response.managerId === null || response.managerId === "") {
                console.log("Incorrect response format, please try again.")
                inquireUserManager();
            } else if (response.managerEmail === null || !response.managerEmail.includes("@") || !response.managerEmail.includes(".")) {
                console.log("Incorrect response format, please try again.")
                inquireUserManager();
            } else if (response.managerOffice === null || !response.managerOffice === "") {
                console.log("Incorrect response format, please try again.")
                inquireUserManager();
            } else {
                team[0] = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOffice);
                inquireUserMenu();
            }
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
            } else if (response.menuChoice === "Finish team builder"){
                console.log("Building team. . .");
                console.log(team);
                fs.writeFile('index.html', new generateHTML(team).generateContent(), (err) => {
                });
            } else {
                console.log("Incorrect response! Try again.")
                inquireUserMenu();
            }
        });
};

function inquireUserEngineer() {
    inquirer
        .prompt(questions.engineerQuestions)
        .then((response) => {
            if(response.engineerName === null || response.engineerName === "") {
                console.log("Incorrect response format, please try again.");
                inquireUserEngineer();
            } else if (response.engineerId === null || response.engineerId === "") {
                console.log("Incorrect response format, please try again.")
                inquireUserEngineer();
            } else if (response.engineerEmail === null || !response.engineerEmail.includes("@") || !response.engineerEmail.includes(".")) {
                console.log("Incorrect response format, please try again.")
                inquireUserEngineer();
            } else if (response.engineerGithub === null || !response.engineerGithub === "") {
                console.log("Incorrect response format, please try again.")
                inquireUserEngineer();
            } else {
                team.push(new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub));
                inquireUserMenu();
            }
        });
};

function inquireUserIntern() {
    inquirer
        .prompt(questions.internQuestions)
        .then((response) => {
            if(response.internName === null || response.internName === "") {
                console.log("Incorrect response format, please try again.");
                inquireUserIntern();
            } else if (response.internId === null || response.internId === "") {
                console.log("Incorrect response format, please try again.")
                inquireUserIntern();
            } else if (response.internEmail === null || !response.internEmail.includes("@") || !response.internEmail.includes(".")) {
                console.log("Incorrect response format, please try again.")
                inquireUserIntern();
            } else if (response.internSchool === null || !response.internSchool === "") {
                console.log("Incorrect response format, please try again.")
                inquireUserIntern();
            } else {
                team.push(new Intern(response.internName, response.internId, response.internEmail, response.internSchool));
                inquireUserMenu();
            }
        });
}