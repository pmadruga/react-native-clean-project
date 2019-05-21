// Set up a mock command executor that records task names so we may verify task execution
jest.mock('../source/internals/executor');
const executor = require('../source/internals/executor');
const tasksExecuted = [];
executor.executeTask.mockImplementation(task => {
  //console.log('executing task with name: ' + task.name);
  tasksExecuted.push(task.name);
  return Promise.resolve();
});

const { tasks, autoTasks } = require('../source/internals/tasks');
const plugin = require('../source/plugin');

describe('Tasks List', () => {
  it('should have twelve tasks in total', () => {
    const input = Object.keys(tasks).length;
    const expected = 12;

    expect(input).toEqual(expected);
  });
});

describe('Correct auto tasks run', () => {
  it('should run the correct tasks in plugin auto-clean mode', () => {
    // auto-mode is the first plugin function, execute it
    plugin[0].func();
    expect(tasksExecuted.length).toEqual(8);
    autoTasks.forEach(task => {
      expect(tasksExecuted.includes(task.name)).toEqual(true);
    });
  });
});
