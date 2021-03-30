"use strict";
/**
 * Type Inference
 */
var text = 'hello';
function print(message) {
    if (message === void 0) { message = 'hello'; }
    console.log(message);
}
print('hello');
function add(x, y) {
    return x + y;
}
var result = add(1, 2);
