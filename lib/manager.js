const Employee = require('./employee.js');

function Manager(name, id, email, offNumber) {
  this.employee = new Employee(name, id, email);
  this.officeNumber = offNumber;
};

Manager.prototype.getRole = function() {
  console.log("Role: Manager");
};

module.exports = Manager;