const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
  const employee = new Employee();

  expect(typeof(employee)).toBe('object');
});

test('can set a name', () => {
  const name = "Tim";
  const employee = new Employee(name);
  expect(employee.name).toBe(name);
});

test('can set an id', () => {
  const id = 12345;
  const employee = new Employee("Tim", id);
  expect(employee.id).toBe(id);
});

test('can set an email', () => {
  const email = "email@email.com";
  const employee = new Employee("Tim", 12345, email);
  expect(employee.email).toBe(email);
});

test('can getName()', () => {
  const name = "Tim";
  const employee = new Employee(name);
  expect(employee.getName()).toBe(name);
});

test('can getId()', () => {
  const id = 12345;
  const employee = new Employee("Tim", id);
  expect(employee.getId()).toBe(id);
});

test('can getEmail()', () => {
  const email = "email@email.com";
  const employee = new Employee("Tim", 12345, email);
  expect(employee.getEmail()).toBe(email);
});

test('getRole() returns Employee', () => {
  const role = "Employee";
  const employee = new Employee("Tim", 12345, "email@email.com");
  expect(employee.getRole()).toBe(role);
});