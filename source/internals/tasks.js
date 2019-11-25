// Implementation of various command-line tasks
// You may use argument arrays, or command lists
// These commands are sent to node built-in spawn with options shell: true

const tasks = {
  wipeiOSBuildFolder: {
    name: 'wipe iOS build artifacts',
    command:
      'rm -rf ios/build && (killall Xcode || true) && xcrun -k && cd ios && xcodebuild -alltargets clean && cd .. && rm -rf "$(getconf DARWIN_USER_CACHE_DIR)/org.llvm.clang/ModuleCache" && rm -rf "$(getconf DARWIN_USER_CACHE_DIR)/org.llvm.clang.$(whoami)/ModuleCache" && rm -fr ~/Library/Developer/Xcode/DerivedData/ && rm -fr ~/Library/Caches/com.apple.dt.Xcode/',
    args: []
  },
  wipeiOSPodsFolder: {
    name: 'wipe iOS Pods folder',
    command: 'rm',
    args: ['-rf', 'ios/Pods']
  },
  updatePods: {
    name: 'update iOS Pods',
    command: 'cd ios && pod update',
    args: []
  },
  wipeAndroidBuildFolder: {
    name: 'wipe android build folder',
    command: 'rm',
    args: ['-rf', 'android/build']
  },
  watchmanCacheClear: {
    name: 'watchman cache clear (if watchman is installed)',
    command: 'watchman watch-del-all || true',
    args: []
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
    name: 'yarn cache clean (if yarn is installed)',
    command: 'test -f yarn.lock && yarn cache clean || true',
    args: []
  },
  yarnInstall: {
    name: 'yarn install (if yarn is installed)',
    command: 'test -f yarn.lock && yarn install || true',
    args: []
  },
  npmCacheVerify: {
    name: 'npm cache verify',
    command: 'npm',
    args: ['cache', 'verify']
  },
  npmInstall: {
    name: 'npm ci',
    command: 'test -f package-lock.json && npm ci || true',
    args: []
  }
};

const autoTasks = [
  tasks.wipeiOSBuildFolder,
  tasks.wipeiOSPodsFolder,
  tasks.wipeAndroidBuildFolder,
  tasks.watchmanCacheClear,
  tasks.wipeTempCaches,
  tasks.wipeNodeModules,
  tasks.yarnCacheClean,
  tasks.npmCacheVerify,
  tasks.npmInstall
];

module.exports = {
  tasks,
  autoTasks
};
