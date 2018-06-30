# MouseMovement.js


![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=for-the-badge)

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
