const { tasksList } = require('../source');

describe('Tasks List', () => {
  it('should have nine tasks in total', () => {
    const input = Object.keys(tasksList).length;
    const expected = 9;

    expect(input).toEqual(expected);
  });
});
