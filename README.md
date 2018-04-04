# React Native Clean Project

[![npm version](https://badge.fury.io/js/react-native-clean-project.svg)](https://badge.fury.io/js/react-native-clean-project) ![https://img.shields.io/github/license/pmadruga/react-native-clean-project.svg](https://img.shields.io/github/license/pmadruga/react-native-clean-project.svg)
[![GitHub issues](https://img.shields.io/github/issues/pmadruga/react-native-clean-project.svg)](https://github.com/pmadruga/react-native-clean-project/issues)

Cleans your React Native project by purging caches and modules, and reinstalling them again.

## Installing

`yarn add -D react-native-clean-project`

## Running

To run on your console, just run:

`./node_modules/.bin/react-native-clean-project`

Or add it as a script to your `package.json`

```
"scripts": {
    "clean": "react-native-clean-project"
  }
```

## Content

This is a combination of the commands suggested in the React Native documentation plus others. They are:

1.  `rm -rf ios/build` (optional)
2.  `rm -rf android/build` (optional)
3.  `watchman watch-del-all`
4.  `rm -rf $TMPDIR/react-*`
5.  `rm -rf $TMPDIR/metro-*`
6.  `brew update`
7.  `brew upgrade`
8.  `rm -rf node_modules` (optional)
9.  `yarn cache clean`
10. `yarn install`

Command line arguments available for CI's:

* `--remove-iOS-build`
* `--remove-android-build`
* `--keep-node-modules`

Example: `./node_modules/.bin/react-native-clean-project --remove-iOS-build`

## Other Tips

You can also reset the Metro bundler cache when starting with `react-native start --reset-cache`

## Contributing

Please read [CONTRIBUTING.md](https://github.com/pmadruga/react-native-clean-project/blob/readme-update/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Pedro Madruga** - _Initial work and maintenance_ - [pmadruga](https://github.com/pmadruga)

See also the list of [contributors](https://github.com/pmadruga/react-native-clean-project/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
