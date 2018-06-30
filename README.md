# MouseMovement.js

Get the mouse movement direction and speed (using requestAnimationFrame)

## Installation

```
npm install mouse-movement
```

## Usage

Listen for mouse movement on the window

```
import MouseMovement from './js/MouseMovement';

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

```
import MouseMovement from './js/MouseMovement';

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

## Examples

Coming soon