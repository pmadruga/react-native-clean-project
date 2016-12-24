# React Native Clean Project
Cleans your React Native project by purging caches and modules, and reinstalling them again.

# Install
`yarn add react-native-clean-project`

# Run
`./node_modules/.bin/react-native-clean-project`

# Content
 This is a combination of the commands suggested in the React Native documentation plus others. They are:
 
 1. `watchman watch-del-all`
 * `rm -rf node_modules`
 * `rm -rf $TMPDIR/react-*`
 * `npm cache clean`
 * `brew update`
 * `brew upgrade`
 * `yarn`

# Tip
Add to package.json
`
"scripts": {
	...
    "purge": "./node_modules/.bin/react-native-clean-project",
	...
  },
  `
