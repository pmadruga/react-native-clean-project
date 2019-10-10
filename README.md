# React Native Clean Project

[![npm version](https://badge.fury.io/js/react-native-clean-project.svg)](https://badge.fury.io/js/react-native-clean-project) ![https://img.shields.io/github/license/pmadruga/react-native-clean-project.svg](https://img.shields.io/github/license/pmadruga/react-native-clean-project.svg)
[![GitHub issues](https://img.shields.io/github/issues/pmadruga/react-native-clean-project.svg)](https://github.com/pmadruga/react-native-clean-project/issues)
[![Build Status](https://travis-ci.org/pmadruga/react-native-clean-project.svg?branch=master)](https://travis-ci.org/pmadruga/react-native-clean-project)

Cleans your React Native project by purging caches and modules, and reinstalling them again.

## Installing

`yarn add -D react-native-clean-project`

## Running

### React-Native CLI plugin

This module is automatically detected as a plugin by the standard `react-native` command, adding new sub-commands:

* `react-native clean-project-auto` - fully automated project state clean: like a freshly-cloned, never-started repo
* `react-native clean-project` - interactive project state clean: choose types of react-native state to clean

### Direct execution

For complete control (including using command-line arguments to non-interactively fine-tune what state is cleaned):

`./node_modules/.bin/react-native-clean-project`

Or add it as a script to your `package.json`

```json
"scripts": {
  "clean": "react-native-clean-project"
}
```

## Content

This is a combination of the commands suggested in the React Native documentation plus others.

| State Type           | Command                       | In `clean-project-auto`? | Optional?  | Default? | Option Flag            |
| -------------------- | ----------------------------- | ------------------------ | ---------- | -------- | ---------------------- |
| React-native cache   | `rm -rf $TMPDIR/react-*`      | Yes                      | No         | true     |                        |
| Metro bundler cache  | `rm -rf $TMPDIR/metro-*`      | Yes                      | No         | true     |                        |
| Watchman cache       | `watchman watch-del-all`      | Yes                      | No         | true     |                        |
| NPM modules          | `rm -rf node_modules`         | Yes                      | Yes        | true     | --keep-node_modules    |
| Yarn cache           | `yarn cache clean`            | Yes                      | Yes        | true     | --keep-node-modules    |
| Yarn packages        | `yarn install`                | No                       | Yes        | true     | --keep-node-modules    |
| NPM cache            | `npm cache verify`            | Yes                      | Yes        | true     | --keep-node-modules    |
| NPM Install          | `npm ci`                      | Yes                      | Yes        | true     | --keep-node-modules    |
| iOS build folder     | `rm -rf ios/build`            | Yes                      | Yes        | false    | --remove-iOS-build     |
| iOS pods folder      | `rm -rf ios/pods`             | Yes                      | Yes        | false    | --remove-iOS-pods      |
| Android build folder | `rm -rf android/build`        | Yes                      | Yes        | false    | --remove-android-build |
| Brew package         | `brew update && brew upgrade` | No                       | Yes        | true     | --keep-brew            |
| Pod packages         | `pod update`                  | No                       | Yes        | true     | --keep-pods            |

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
