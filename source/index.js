const spawn = require('child_process').spawn;

const watchman = spawn('watchman', ['watch-del-all']);
const wipeNodeModules = spawn('rm', ['-rf', 'node_modules', '-rf', '$TMPDIR/react-*']);
const cleanCache = spawn('npm', ['cache', 'clean']);
const brewUpdate = spawn('brew', ['update']);
const installNodeModules = spawn('yarn');

const runTasks = [{
    task: watchman,
    name: 'watchman'
}, {
    task: wipeNodeModules,
    name: 'wipeNodeModules'
}, {
    task: cleanCache,
    name: 'cleanCache'
}, {
    task: brewUpdate,
    name: 'brewUpdate'
}, {
    task: installNodeModules,
    name: 'installNodeModules'
}];

runTasks.map((currentValue) => {
    currentValue.task.stderr.on('data', data => {
        console.log(`Error running ${currentValue.name}: ${data}`);
    });

    currentValue.task.on('exit', code => {
        if (currentValue.name === 'brewUpdate' && code === 0) {
            spawn('brew', ['upgrade']);
        }

        console.log(`✅  ${currentValue.name} task has finished running`);
    });
});
