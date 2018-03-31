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

## Contributing

Please read [CONTRIBUTING.md](https://github.com/pmadruga/react-native-clean-project/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Commit guidelines

### Commit Message Format

Each commit message consists of a **header**, a **body** and a **footer**. The header has a special
format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier
to read on GitHub as well as in various git tools.

### Type

Must be one of the following:

* **feat**: A new feature
* **fix**: A bug fix
* **docs**: Documentation only changes
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing
  semi-colons, etc)
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **perf**: A code change that improves performance
* **test**: Adding missing or correcting existing tests
* **chore**: Changes to the build process or auxiliary tools and libraries such as documentation
  generation

### Scope

The scope could be anything specifying place of the commit change. For example `docs`, or `source/index.js`

You can use `*` when the change affects more than a single scope.

### Subject

The subject contains succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize first letter
* no dot (.) at the end

### Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/pmadruga/react-native-clean-project/tags).

## Authors

* **Pedro Madruga** - _Initial work and maintenance_ - [pmadruga](https://github.com/pmadruga)

See also the list of [contributors](https://github.com/pmadruga/react-native-clean-project/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
