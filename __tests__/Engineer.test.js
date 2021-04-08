const Engineer = require('../lib/Engineer.js');

test('can set a github username', () => {
  const githubUser = "GitHubUsername";
  const employee = new Engineer("Tim", 12345, "email@email.com", githubUser);
  expect(employee.githubUser).toBe(githubUser);
});

test('can getGithub()', () => {
  const githubUser = "GitHubUserName";
  const employee = new Engineer("Tim", 12345, "email@email.com", githubUser);
  expect(employee.getGithub()).toBe(githubUser);
})


test("getRole() returns Engineer", () => {
  const role = "Engineer";
  const employee = new Engineer("Tim", 12345, "email@email.com", "GitHubUserName");
  expect(employee.getRole()).toBe(role);
});