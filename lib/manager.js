const Employee = require('./employee.js');

function Manager(name, id, email, offNumber) {
  this.employee = new Employee(name, id, email);
  this.officeNumber = offNumber;
  this.getNumber = () => this.officeNumber;
};

Manager.prototype.getRole = function() {
  console.log("Role: Manager");
  return "Manager";
};

module.exports = Manager;