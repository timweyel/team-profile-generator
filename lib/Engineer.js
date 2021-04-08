const Employee = require('../lib/Employee.js');

class Engineer extends Employee{
  constructor(name, id, email, githubUser) {
    super(name, id, email);
    this.githubUser = githubUser;
    this.title = "Engineer";
  }

  getGithub() {
    return this.githubUser;
  }

  getROle() {
    return this.title;
  }
}

module.exports = Engineer;