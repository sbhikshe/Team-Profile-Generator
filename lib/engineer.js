const Employee = require('./employee.js');

function Engineer(name, id, email, githubUsername) {
  this.employee = new Employee(name, id, email);
  this.githubUsername = githubUsername;
  this.getGithub = () => githubUsername;
};

Engineer.prototype.getRole = function() {
  console.log("Role: Engineer");
  return "Engineer";
};

/*
Engineer.prototype.getGithub = function() {
  console.log("in getGithub()")
};
*/

module.exports = Engineer;