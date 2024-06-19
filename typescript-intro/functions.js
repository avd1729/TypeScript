"use strict";
function none(a, b) {
    // void - return
}
const subtract = (a, b) => {
    return a - b;
};
const mult = function (a, b) {
    return a * b;
};
function add(a, b, c) {
    return c ? a + b + c : a + b;
} // optional params
function add2(a, b = 10) {
    return a + b;
} // default value
const add3 = (a, b, ...c) => {
    return a + b + c.reduce((a, b) => a + b, 0);
};
let nums = [1, 2, 3];
console.log(add3(1, 2, ...nums));
