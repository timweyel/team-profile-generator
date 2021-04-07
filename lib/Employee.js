class Employee {
  constructor(name, id, email){
      this.name = name;
      this.id = id;
      this.title = "Employee";
      this.email = email;
  };
  getName(){
      return this.name;
  };
  getId() {
      return this.id;

  };
  getEmail() {
      return this.email;

  };
  getRole(){
      return this.title;

  };
}


// const employee = new Employee('Tim', 123, 'tweyel@gmail.com');
// console.log(employee);

module.exports = Employee;