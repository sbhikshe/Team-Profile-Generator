const inquirer = require('inquirer');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');


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


