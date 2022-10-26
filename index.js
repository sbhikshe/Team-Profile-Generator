const inquirer = require('inquirer');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');
const htmlGenerator = require('./src/generateHtml.js');

/* Employee questions */
let employeeQs = [
  {
    type: 'input',
    message: "Please enter the name:",
    name: 'name',
    validate (name) {
      if(!name || name == "") {
        return ("Please enter a name");
      }
      return true;
    }
  },
  {
    type: 'input',
    message: "Please enter the ID number:",
    name: 'id'
  },
  {
    type: 'input',
    message: "Please enter an email address:",
    name: 'email'
  }
];

/* Manager questions */
let managerQs = [
  ...employeeQs,
  {
    type: 'input',
    message: "Please enter the office number:",
    name: 'officeNumber'
  }  
];

/* Engineer questions */
let engineerQs = [
  ...employeeQs,
  {
    type: 'input',
    message: "Please enter the Github username:",
    name: 'githubUsername'
  }  
];

/* Intern questions */
let internQs = [
  ...employeeQs,
  {
    type: 'input',
    message: "Please enter the school:",
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
  console.log("Add the manager: ");
  inquirer.prompt(managerQs)
  .then(data => {
    console.log(data);
    var manager = new Manager(data.name, data.id, data.email, data.officeNumber);
    team.push(manager);
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
        htmlGenerator.generateMarkup(team);
      }
    });
}

function buildTeam() {
  /* Manager is added first, other employees are added after this. */
  addManager();
 
}

buildTeam();
