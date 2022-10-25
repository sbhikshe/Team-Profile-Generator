const Employee = require('./employee.js');

class Manager extends Employee {
  constructor (name, id, email, offNumber) {
    super(name, id, email);
    this.officeNumber = offNumber;
  }
  getNumber = () => this.officeNumber;
  getRole = () => "Manager";
}

module.exports = Manager;