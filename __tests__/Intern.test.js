const Intern = require('../lib/Intern.js');

test('can set school', () => {
  const school = "Cal Poly SLO";
  const employee = new Intern("Tim", 12345, "email@email.com", school);
  expect(employee.school).toBe(school);
});

test('can getSchool()', () => {
  const school = "Cal Poly SLO";
  const employee = new Intern("Tim", 12345, "email@email.com", school);
  expect(employee.getSchool()).toBe(school);
})


test("getRole() returns Intern", () => {
  const role = "Intern";
  const employee = new Intern("Tim", 12345, "email@email.com", "Cal Poly SLO");
  expect(employee.getRole()).toBe(role);
});