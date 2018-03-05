# React Native Clean Project

Cleans your React Native project by purging caches and modules, and reinstalling them again.

# Install

`yarn add -D react-native-clean-project`

# Run

`./node_modules/.bin/react-native-clean-project`

# Content

This is a combination of the commands suggested in the React Native documentation plus others. They are:

1. `rm -rf ios/build` (optional)
2. `rm -rf android/build` (optional)
3. `watchman watch-del-all`
4. `rm -rf $TMPDIR/react-*`
5. `rm -rf $TMPDIR/metro-*`
6. `brew update`
7. `brew upgrade`
8. `rm -rf node_modules` (optional)
9. `yarn cache clean`
10. `yarn install`

# Tip

You can also reset the Metro bundler cache when starting with `react-native start --reset-cache`
Add to package.json
`"scripts": { ... "purge": "./node_modules/.bin/react-native-clean-project", ... },`

#

PR's welcome
