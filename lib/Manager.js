const Employee = require('../lib/Employee.js');

class Manager extends Employee {
  constructor(name, id, email, officeNumber){
    super (name, id, email);
    this.officeNumber = officeNumber;
    this.title = "Manager";
  };

  getOffice() {
    return this.officeNumber;
  }

  getRole() {
    return this.title;
  }
}


module.exports = Manager;