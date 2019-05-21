const { spawn } = require('child_process');

function elapsedTime(startTime) {
  const precision = 0;
  const elapsed = process.hrtime(startTime)[1] / 1000000;
  const secondCount = process.hrtime(startTime)[0];
  const millisecondCount = elapsed.toFixed(precision);

  if (secondCount > 0) return `${secondCount}s`;
  return `${millisecondCount}ms`;
}

function executeTask(task) {
  return new Promise((resolve, reject) => {
    const startTime = process.hrtime();
    const spawnedTask = spawn(task.command, task.args, { shell: true });

    spawnedTask.stderr.on('data', data => {
      console.log(`Error running '${task.name}': ${data}`);
    });

    spawnedTask.on('error', error => {
      console.log(
        `❌  Command '${task.name}' failed with error: ${error.message}`
      );
      reject();
    });

    spawnedTask.on('exit', code => {
      if (code !== 0) {
        console.log(`❌  Command '${task.name}' failed with code: ${code}`);
        reject();
      } else {
        console.log(
          `✅  ${task.name} task has finished running in ${elapsedTime(
            startTime
          )}.`
        );
        resolve(code);
      }
    });
  });
}

module.exports = {
  executeTask
};
