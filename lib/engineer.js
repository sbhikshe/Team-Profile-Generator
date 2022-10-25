const Employee = require('./employee.js');

class Engineer extends Employee {
  constructor(name, id, email, githubUsername) {
    super(name, id, email);
    this.githubUsername = githubUsername;
  }
  getGithub = () => this.githubUsername;
  getRole = () => "Engineer";
}

module.exports = Engineer;