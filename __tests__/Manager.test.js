const Manager = require('../lib/Manager.js');
const Employee = require('../lib/Employee.js');

test('can set an office number', () => {
  const officeNum = 123;
  const employee = new Manager("Tim", 12345, "email@email.com", officeNum);
  expect(employee.officeNumber).toBe(officeNum);
});

test('can getOffice()', () => {
  const officeNum = 123;
  const employee = new Manager("Tim", 12345, "email@email.com", officeNum);
  expect(employee.getOffice()).toBe(officeNum);
});

test("getRole() returns Manager", () => {
  const role = "Manager";
  const employee = new Manager("Tim", 12345, "email@email.com", 123);
  expect(employee.getRole()).toBe(role);
});
