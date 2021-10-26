#!/usr/bin/env node
const options = require('./internals/options');
const { executeTask } = require('./internals/executor');
const { tasks } = require('./internals/tasks');

async function main() {
  await options.askiOS();
  await options.askiOSPods();
  await options.askSystemiOSPodsCache();
  await options.askUseriOSPodsCache();
  await options.askUpdatePods();
  await options.askAndroid();
  await options.askAndroidCleanProject();
  await options.askNodeModules();
  await options.askBrew();

  options.rlInterface.close();

  await executeTask(tasks.watchmanCacheClear);
  await executeTask(tasks.wipeTempCaches);

  if (options.getWipeiOSBuild()) {
    await executeTask(tasks.wipeiOSBuildFolder);
  }

  if (options.getWipeiOSPods()) {
    await executeTask(tasks.wipeiOSPodsFolder);
  }

  if (options.getWipeSystemiOSPodsCache()) {
    await executeTask(tasks.wipeSystemiOSPodsCache);
  }

  if (options.getUpdatePods()) {
    await executeTask(tasks.updatePods);
  }

  if (options.getWipeUseriOSPodsCache()) {
    await executeTask(tasks.wipeUseriOSPodsCache);
  }
  if (options.getWipeAndroidBuild()) {
    await executeTask(tasks.wipeAndroidBuildFolder);
  }

  if (options.getUpdateBrew()) {
    await executeTask(tasks.brewUpdate);
    await executeTask(tasks.brewUpgrade);
  }

  if (options.getWipeNodeModules()) {
    await executeTask(tasks.wipeNodeModules);
    await executeTask(tasks.yarnCacheClean);
    await executeTask(tasks.npmInstall);
    await executeTask(tasks.yarnInstall);
  }

  if (options.getCleanAndroidProject()) {
    await executeTask(tasks.cleanAndroidProject);
  }
}

main();
