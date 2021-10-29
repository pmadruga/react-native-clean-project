const { spawn } = require('child_process');

function elapsedTime(startTime) {
  const precision = 0;
  const elapsed = process.hrtime(startTime)[1] / 1000000;
  const secondCount = process.hrtime(startTime)[0];
  const millisecondCount = elapsed.toFixed(precision);

  if (secondCount > 0) return `${secondCount}s`;
  return `${millisecondCount}ms`;
}

async function executeTask(task) {
  // return new Promise((resolve, reject) => {
  const startTime = process.hrtime();
  const spawnedTask = await spawn(task.command, task.args, { shell: true });

  // These are just warnings and will be disabled for now.
  // spawnedTask.stderr.on('data', data => {
  //   console.log(`Error running '${task.name}': ${data}`);
  // });

  let data = '';
  console.log(`\nℹ️  STARTED: "${task.name}"`);
  for await (const chunk of spawnedTask.stdout) {
    data += chunk;
  }

  let error = '';
  for await (const chunk of spawnedTask.stderr) {
    // console.error('stderr chunk: ' + chunk);
    error += chunk;
  }

  const exitCode = await new Promise((resolve /*reject*/) => {
    spawnedTask.on('close', resolve);
  });

  if (exitCode) {
    throw new Error(
      `\n\nTask "${task.name}" \nError: ${error}. \nExit code: ${exitCode}\n\n`
    );
  }

  console.log(
    `✅ FINISHED: "${task.name}" task has finished running in ${elapsedTime(
      startTime
    )}.`
  );
  return data;
}

module.exports = {
  executeTask
};
