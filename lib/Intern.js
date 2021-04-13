const Employee = require('../lib/Employee.js');

class Intern extends Employee{
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    this.title = "Intern";
  }

  getSchool() {
    return this.school;
  }

  getROle() {
    return this.title;
  }
}

module.exports = Intern;