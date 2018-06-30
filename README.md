# MouseMovement.js

[![npm (custom registry)](https://img.shields.io/npm/v/npm.svg?registry_uri=https%3A%2F%2Fregistry.npmjs.com/mouse-movement&style=flat-square)](https://www.npmjs.com/package/mouse-speed) 
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/wiseoldman/mouse-movement/blob/master/LICENSE) 
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
mouseMovement.init({callbackFn: mouseMovementCallback});

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
mouseMovement.init({callbackFn: mouseMovementCallback});

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
const mouseMovement = new MouseMovement('.element');
mouseMovement.init({callbackFn: mouseMovementCallback});

mouseMovement.destroy();
```

## Examples

Coming soon
