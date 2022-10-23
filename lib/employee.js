function Employee(name, id, email) {
  this.name = name;
  this.id = id;
  this.email = email;
  this.getName = () => this.name;
  this.getId = () => this.id;
  this.getEmail = () => this.email;
}

Employee.prototype.getRole = function() {
  console.log("Role: Employee");
  return "Employee";
}

module.exports = Employee;
