# MouseMovement.js

[![Github file size](https://img.shields.io/github/size/wiseoldman/mouse-movement/dist/MouseMovement.js.svg?style=flat-square)](https://github.com/wiseoldman/mouse-movement) [![GitHub issues](https://img.shields.io/github/issues/wiseoldman/mouse-movement.svg?style=flat-square)](https://github.com/wiseoldman/mouse-movement/issues) [![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/mouse-movement) [![GitHub license](https://img.shields.io/github/license/wiseoldman/mouse-movement.svg?style=flat-square)](https://github.com/wiseoldman/mouse-movement/blob/master/LICENSE)

Get the mouse movement direction and speed (using requestAnimationFrame)

## Installation

```shell
$ npm install mouse-movement
```

## Usage

Listen for mouse movement on the window

```js
import MouseMovement from 'MouseMovement';

const mouseMovement = new MouseMovement();
mouseMovement.init({mousemoveCallback: mouseMovementCallback});

let mouseMovementCallback = function () {
    console.log(mouseMovement.directionX);
    console.log(mouseMovement.speedX);
    console.log(mouseMovement.directionY);
    console.log(mouseMovement.speedY);
    console.log(mouseMovement.diagonal);
}
```

Listen for mouse movement on one or more elements

```js
import MouseMovement from 'MouseMovement';

const mouseMovement = new MouseMovement('.element');
mouseMovement.init({mousemoveCallback: mouseMovementCallback});

let mouseMovementCallback = function () {
    console.log(mouseMovement.directionX);
    console.log(mouseMovement.speedX);
    console.log(mouseMovement.directionY);
    console.log(mouseMovement.speedY);
    console.log(mouseMovement.diagonal);
}
```

Remove all listeners associated with the class

```js
mouseMovement.destroy();
```

## Examples

Coming soon
