#!/usr/bin/env node
/* eslint-disable no-console */

const { spawn } = require('child_process');
const { createInterface } = require('readline');

const tasksList = {
  wipeiOSBuildFolder: {
    name: 'wipe iOS build folder',
    command: 'rm',
    args: ['-rf', 'ios/build']
  },
  wipeAndroidBuildFolder: {
    name: 'wipe android build folder',
    command: 'rm',
    args: ['-rf', 'android/build']
  },
  watchmanCacheClear: {
    name: 'watchman cache clear',
    command: 'watchman',
    args: ['watch-del-all']
  },
  wipeTempCaches: {
    name: 'wipe temporary caches',
    command: 'rm',
    args: ['-rf', '$TMPDIR/react-*', '$TMPDIR/metro-*']
  },
  brewUpdate: {
    name: 'brew update',
    command: 'brew',
    args: ['update']
  },
  brewUpgrade: {
    name: 'brew upgrade',
    command: 'brew',
    args: ['upgrade']
  },
  wipeNodeModules: {
    name: 'wipe node_modules',
    command: 'rm',
    args: ['-rf', 'node_modules', '$TMPDIR/react-*', '$TMPDIR/metro-*']
  },
  yarnCacheClean: {
    name: 'yarn cache clean',
    command: 'yarn',
    args: ['cache', 'clean']
  },
  yarnInstall: {
    name: 'yarn install',
    command: 'yarn',
    args: ['install']
  }
};

function elapsedTime (startTime) {
  const precision = 0;
  const elapsed = process.hrtime(startTime)[1] / 1000000;
  const secondCount = process.hrtime(startTime)[0];
  const millisecondCount = elapsed.toFixed(precision);

  if (secondCount > 0) return `${secondCount}s`;
  return `${millisecondCount}ms`;
}

function executeTask (task) {
  return new Promise(resolve => {
    const startTime = process.hrtime();
    const spawnedTask = spawn(task.command, task.args);

    spawnedTask.stderr.on('data', data => {
      console.log(`Error running ${task.name}: ${data}`);
    });

    spawnedTask.on('exit', code => {
      if (code !== 0) {
        console.log(`Command execution failed with code: ${code}`);
      } else {
        console.log(
          `✅  ${task.name} task has finished running in ${elapsedTime(
            startTime
          )}.`
        );
      }
      resolve(code);
    });
  });
}

const rlInterface = createInterface({
  input: process.stdin,
  output: process.stdout
});

let wipeiOSBuild;
let wipeAndroidBuild;
let wipeNodeModules;

rlInterface.question('Wipe iOS build folder? (Y/n) ', iosAnswer => {
  if (iosAnswer === 'Y') wipeiOSBuild = true;

  rlInterface.question('Wipe android build folder? (Y/n) ', androidAnswer => {
    if (androidAnswer === 'Y') wipeAndroidBuild = true;

    rlInterface.question(
      'Wipe node_modules folder? (Y/n) ',
      nodeModulesAnswer => {
        if (nodeModulesAnswer === 'Y') wipeNodeModules = true;
        rlInterface.close();
      }
    );
  });
});

rlInterface.on('close', () => {
  if (wipeiOSBuild) executeTask(tasksList.wipeiOSBuildFolder);
  if (wipeAndroidBuild) executeTask(tasksList.wipeAndroidBuildFolder);
  executeTask(tasksList.watchmanCacheClear);
  executeTask(tasksList.wipeTempCaches);
  executeTask(tasksList.brewUpdate).then(code => {
    if (code === 0) {
      executeTask(tasksList.brewUpgrade);
    }
  });
  if (wipeNodeModules) {
    executeTask(tasksList.wipeNodeModules)
      .then(() => executeTask(tasksList.yarnCacheClean))
      .then(() => executeTask(tasksList.yarnInstall));
  }
});
