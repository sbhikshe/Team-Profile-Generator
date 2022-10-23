const Employee = require('./employee.js');

function Intern(name, id, email, school) {
  this.employee = new Employee(name, id, email);
  this.school = school;
  this.getSchool = () => this.school;
};

Intern.prototype.getRole = function() {
  console.log("Role: Intern");
  return "Intern";
};

module.exports = Intern;