const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
  const engineer = new Engineer();

  expect(typeof(engineer)).toBe('object');
});
