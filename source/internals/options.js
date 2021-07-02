const { createInterface } = require('readline');

const rlInterface = createInterface({
  input: process.stdin,
  output: process.stdout
});

// Possible arguments: --remove-iOS-build --remove-android-build --keep-node-modules
const args = process.argv.slice(2);
// Defaults

let cleanAndroidProject = false;
let wipeiOSBuild = false;
let wipeiOSPods = false;
let wipeSystemiOSPodsCache = true;
let wipeUseriOSPodsCache = true;
let wipeAndroidBuild = false;
let wipeNodeModules = true;
let updateBrew = true;
let updatePods = true;

const getCleanAndroidProject = () => {
  return cleanAndroidProject;
};
const getWipeiOSBuild = () => {
  return wipeiOSBuild;
};
const getWipeiOSPods = () => {
  return wipeiOSPods;
};
const getWipeSystemiOSPodsCache = () => {
  return wipeSystemiOSPodsCache;
};
const getWipeUseriOSPodsCache = () => {
  return wipeUseriOSPodsCache;
};
const getWipeAndroidBuild = () => {
  return wipeAndroidBuild;
};
const getWipeNodeModules = () => {
  return wipeNodeModules;
};
const getUpdateBrew = () => {
  return updateBrew;
};
const getUpdatePods = () => {
  return updatePods;
};

const askQuestion = (question, callback) => {
  rlInterface.question(question, answer => {
    callback(answer);
  });
};

const checkAnswer = (answer, questionFunction, resolve) => {
  answer = answer.toLowerCase() || 'y';
  if (answer === 'y') {
    resolve();
    return true;
  } else if (answer === 'n') {
    resolve();
    return false;
  }
  console.log("🚫 Please select 'y' for yes, or 'n' for no.");
  questionFunction().then(() => resolve());
  return false;
};

const askiOS = () =>
  new Promise(resolve => {
    if (args.includes('--remove-iOS-build')) {
      wipeiOSBuild = true;
      return resolve();
    }
    return askQuestion('Wipe iOS build folder? (Y/n) ', answer => {
      wipeiOSBuild = checkAnswer(answer, askiOS, resolve);
    });
  });

const askiOSPods = () =>
  new Promise(resolve => {
    if (args.includes('--remove-iOS-pods')) {
      wipeiOSPods = true;
      return resolve();
    }
    return askQuestion('Wipe iOS Pods folder? (Y/n) ', answer => {
      wipeiOSPods = checkAnswer(answer, askiOSPods, resolve);
    });
  });

const askSystemiOSPodsCache = () =>
  new Promise(resolve => {
    if (args.includes('--keep-system-iOS-pods-cache')) {
      wipeSystemiOSPodsCache = false;
      return resolve();
    }
    return askQuestion('Wipe system iOS Pods cache? (Y/n) ', answer => {
      wipeSystemiOSPodsCache = checkAnswer(
        answer,
        askSystemiOSPodsCache,
        resolve
      );
    });
  });

const askUseriOSPodsCache = () =>
  new Promise(resolve => {
    if (args.includes('--keep-user-iOS-pods-cache')) {
      wipeUseriOSPodsCache = false;
      return resolve();
    }
    return askQuestion('Wipe user iOS Pods cache? (Y/n) ', answer => {
      wipeUseriOSPodsCache = checkAnswer(answer, askUseriOSPodsCache, resolve);
    });
  });

const askAndroidCleanProject = () =>
  new Promise(resolve => {
    if (args.includes('--clean-android-project')) {
      cleanAndroidProject = true;
      return resolve();
    }
    return askQuestion('Clean Android project? (Y/n) ', answer => {
      cleanAndroidProject = checkAnswer(
        answer,
        askAndroidCleanProject,
        resolve
      );
    });
  });

const askAndroid = () =>
  new Promise(resolve => {
    if (args.includes('--remove-android-build')) {
      wipeAndroidBuild = true;
      return resolve();
    }
    return askQuestion('Wipe android build folder? (Y/n) ', answer => {
      wipeAndroidBuild = checkAnswer(answer, askAndroid, resolve);
    });
  });

const askNodeModules = () =>
  new Promise(resolve => {
    if (args.includes('--keep-node-modules')) {
      wipeNodeModules = false;
      return resolve();
    }
    return askQuestion('Wipe node_modules folder? (Y/n) ', answer => {
      wipeNodeModules = checkAnswer(answer, askNodeModules, resolve);
    });
  });

const askBrew = () =>
  new Promise(resolve => {
    if (args.includes('--keep-brew')) {
      updateBrew = false;
      return resolve();
    }
    return askQuestion('Update brew? (Y/n) ', answer => {
      updateBrew = checkAnswer(answer, askBrew, resolve);
    });
  });

const askUpdatePods = () =>
  new Promise(resolve => {
    if (args.includes('--keep-pods')) {
      updatePods = false;
      return resolve();
    }
    return askQuestion('Update pods? (Y/n) ', answer => {
      updatePods = checkAnswer(answer, askUpdatePods, resolve);
    });
  });

module.exports = {
  getCleanAndroidProject,
  getWipeiOSBuild,
  getWipeiOSPods,
  getWipeSystemiOSPodsCache,
  getWipeUseriOSPodsCache,
  getWipeAndroidBuild,
  getWipeNodeModules,
  getUpdateBrew,
  getUpdatePods,
  askiOS,
  askiOSPods,
  askSystemiOSPodsCache,
  askUseriOSPodsCache,
  askUpdatePods,
  askAndroid,
  askAndroidCleanProject,
  askNodeModules,
  askBrew,
  rlInterface
};
