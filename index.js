const inquirer = require('inquirer');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');
const htmlGenerator = require('./src/generateHtml.js');

/*
const teamManager = new Manager("Richard", "001", "richard@teams.com", "408-555-6000");
console.log(teamManager);
teamManager.getRole();

const engr1 = new Engineer("Kevin", "002", "kevin@teams.com", "kevinQ");
console.log(engr1);
engr1.getRole();

const engr2 = new Engineer("Chris", "003", "chris@teams.com", "chrisH");
console.log(engr2);
engr2.getRole();

const intern1 = new Intern("Rob", "004", "rob@teams.com", "Portsmouth");
console.log(intern1);
intern1.getRole();
*/

/* Manager questions */
let employeeQs = [
  {
    type: 'input',
    message: "Please enter the employee's name:",
    name: 'name'
  },
  {
    type: 'input',
    message: "Please enter the employee's ID number:",
    name: 'id'
  },
  {
    type: 'input',
    message: "Please enter employee's email:",
    name: 'email'
  }
];

let managerQs = [
  ...employeeQs,
  {
    type: 'input',
    message: "Please enter the manager's office number",
    name: 'officeNumber'
  }  
];

/* Engineer questions */
let engineerQs = [
  ...employeeQs,
  {
    type: 'input',
    message: "Please enter the engineer's Github username",
    name: 'githubUsername'
  }  
];

/* Intern questions */
let internQs = [
  ...employeeQs,
  {
    type: 'input',
    message: "Please enter the intern's school",
    name: 'school'
  }  
];

let chooseEmployeeQs = [
  {
    type: 'checkbox',
    message: "Do you want to add an engineer or intern?",
    choices: ['Engineer', 'Intern', 'None'],
    name: 'addEmployee' 
  } 
];

let team = []; // array of employees

function addManager() {
inquirer.prompt(managerQs)
.then(data => {
  console.log(data);
  var manager = new Manager(data.name, data.id, data.email, data.officeNumber);
  team.push(manager);
  console.log(manager);
  addEmployee();
});
}

function addEngineer() {
  inquirer.prompt(engineerQs)
  .then(data => {
    console.log(data);
    let eng = new Engineer(data.name, data.id, data.email, data.githubUsername);
    team.push(eng);
    addEmployee();
  });
}

function addIntern() {
  inquirer.prompt(internQs)
  .then(data => {
    console.log(data);
    let intern = new Intern(data.name, data.id, data.email, data.school);
    team.push(intern);
    addEmployee();
  });
}

function addEmployee() {
  /* Ask if the user wants to add an engineer or intern */
    inquirer.prompt(chooseEmployeeQs)
    .then(data => {
      console.log("Add " + data.addEmployee);
      if(data.addEmployee == 'Engineer') {
        addEngineer();
      } else if (data.addEmployee == 'Intern') {
        addIntern();
      } else {
        console.log("Done adding employees");
        console.log("The team: ");
        for (const employee of team) {
          console.log(employee);
        }
        htmlGenerator.generateMarkup(team);
      }
    });
}

function buildTeam() {
  /* Manager is first, employees optional! */
  addManager();
}
buildTeam();
