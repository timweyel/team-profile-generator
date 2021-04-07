const Employee = require('..lib/Employee');

test('creates an employee object', () => {
  const employee = new Employee();

  expect(typeof(employee)).toBe('object');
});










// Employee parent class with the following properties and methods:

// name

// id

// email

// getName()

// getId()

// getEmail()

// getRole() // Returns 'Employee'
