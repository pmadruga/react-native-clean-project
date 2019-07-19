module.exports = [
  {
    description:
      'fully automated project state clean: like a freshly-cloned, never-started repo',
    name: 'clean-project-auto',
    func: () => {
      const { autoTasks } = require('./internals/tasks');
      const { rlInterface } = require('./internals/options');
      const { executeTask } = require('./internals/executor');

      console.log('');
      console.log('Executing fully-automated project clean.');
      console.log("Use 'react-native clean-project' for more control");
      console.log(
        "Use `./node_modules/.bin/react-native-clean-project' for total control"
      );
      console.log('');

      rlInterface.close(); // if we don't do this it hangs waiting for input

      let taskPromises = [];
      autoTasks.forEach(task => {
        taskPromises.push(executeTask(task));
      });

      return Promise.all(taskPromises).then(() => {
        console.log('');
        console.log(
          'Project cleaned. Use yarn or npm, pod, etc to re-install packages.'
        );
        console.log(
          'You may also want to clean the metro bundler cache. It can only be cleaned on metro startup, like this:'
        );
        console.log('react-native start -- --reset-cache');
        console.log('');
      });
    }
  },
  {
    description:
      'interactive project state clean: choose types of react-native state to clean',
    name: 'clean-project',
    // This is just a thin wrapper around the normal command-line execution, but with no arguments
    func: () => require('./index.js')
  }
];
