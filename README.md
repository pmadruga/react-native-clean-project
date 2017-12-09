# React Native Clean Project
Cleans your React Native project by purging caches and modules, and reinstalling them again.

# Install
`yarn add -D react-native-clean-project`

# Run
`./node_modules/.bin/react-native-clean-project`

# Content
 This is a combination of the commands suggested in the React Native documentation plus others. They are:

 1. `watchman watch-del-all`
 2. `rm -rf node_modules`
 3. `rm -rf $TMPDIR/react-*`
 4. `yarn cache clean`
 5. `brew update`
 6. `brew upgrade`
 7. `yarn`

# Tip
Add to package.json
`
"scripts": {
	...
    "purge": "./node_modules/.bin/react-native-clean-project",
	...
  },
  `

# 

PR's welcome