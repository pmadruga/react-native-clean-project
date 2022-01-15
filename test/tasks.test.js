// Set up a mock command executor that records task names so we may verify task execution
jest.mock('../source/internals/executor');
const executor = require('../source/internals/executor');
const { tasks, autoTasks } = require('../source/internals/tasks');
const plugin = require('../source/plugin');

const tasksExecuted = [];

executor.executeTask.mockImplementation((task) => {
  tasksExecuted.push(task.name);

  return task;
});

describe('Tasks List', () => {
  it('should have the correct number of tasks in total', () => {
    const input = Object.keys(tasks).length;
    const expected = 16;

    expect(input).toEqual(expected);
  });
});

describe('Auto tasks run', () => {
  it('should run the correct tasks in plugin auto-clean mode', async () => {
    await plugin[0].func();

    expect(tasksExecuted.length).toEqual(12);
    autoTasks.forEach((task) => {
      expect(tasksExecuted.includes(task.name)).toEqual(true);
    });
  });
});
