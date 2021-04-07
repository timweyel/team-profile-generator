class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    };
    getName(){
        return this.name;
    };
};


// const employee = new Employee('Tim', 123, 'tweyel@gmail.com');
// console.log(employee);

module.exports = Employee;