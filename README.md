# ebabel-distance
[![Build Status](https://travis-ci.org/ebabel-games/ebabel-distance.svg?branch=master)](https://travis-ci.org/ebabel-games/ebabel-distance)

Return the distance in 3D space from point "i" x, y, and z coordinates to point "j" x, y, and z coordinates.

## Module install and usage in your game

### Install
```
npm i --save ebabel-distance
```

### Usage
```
const distance = require('ebabel-distance');
const i = [-4, 10, 3];
const j = [2, 3, 8];

const result = distance(i, j);
```

## Development of this module
Fork this repository on Github, `git clone` your repository, checkout the develop branch, and when you are done, submit a pull request from your repository develop branch to this repository develop branch.

* fork repository on github.com
* git clone 'fork repository'
* git checkout -b develop

### First step when developing
```
npm install
```

### Run linting and unit tests
```
npm test
```

An html coverage report is to be found in the `coverage` folder.

### Generate documentation
```
npm run jsdoc
```

The generated documentation is to be found in the `docs` folder.
