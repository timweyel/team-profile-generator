const Manager = require('../lib/Manager.js');

test('creates an manager object', () => {
  const manager = new Manager();

  expect(typeof(manager)).toBe('object');
});
