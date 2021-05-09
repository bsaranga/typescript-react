"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _data;
const age = 84;
const numStr = "string";
const state = true;
// Typing arrays
let myArr = [];
let arr = [];
let binaryArr = [];
// Arrays as tuples
let point2d = [5, 0.2];
// Function types
// Structure of function return type
/* (param: type) => returnType */
const foo = (p) => Number(p);
foo("5");
// return type is inferred so we can write below
const square = (param) => param * param;
// Callback types - we can specify the type of the callback 
// using parameter type and return type with the fat arrow in the middle
function foobar(otherFunc) {
    return otherFunc(123);
}
// Optional parameters
function bar(callback) {
    if (!callback) {
        return 0;
    }
    return callback(4);
}
bar();
// Parameter default values
function createPoint(x = 0, y = 0) {
    // parameter types are inferred
    return [x, y];
}
// Rest parameter types
function joinNumbers(...nums) {
    return nums.join('-');
}
function PersonFactory(firstName, lastName, age, company) {
    let person = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        company: company,
        getFullName: function () {
            return `${this.firstName} ${this.lastName}`;
        }
    };
    return person;
}
let saranga = PersonFactory('Saranga', 'Buwaneka', 28);
let saranga2 = PersonFactory('Saranga', 'Buwaneka', 28, 'KronoFlex');
let buwaneka = "this is a string";
let boo = { value: "haha" };
// Type parameterized class
class SimpleStack {
    constructor() {
        _data.set(this, []);
    }
    push(x) {
        __classPrivateFieldGet(this, _data).push(x);
    }
    pop() {
        const result = __classPrivateFieldGet(this, _data).pop();
        if (!result)
            throw new Error('Empty');
        return result;
    }
    get length() {
        return __classPrivateFieldGet(this, _data).length;
    }
}
_data = new WeakMap();
const stringStack = new SimpleStack();
stringStack.push('first');
stringStack.push('second');
// Maps with Typescript (type definition can be dropped to be inferred)
const myMap = new Map([
    [false, 'no'],
    [true, 'yes']
]);
// Type variables for functions
function id(x) {
    return x;
}
id(123);
// or
id(123); // thanks to type inference
function fillArray(len, elem) {
    return new Array(len).fill(elem);
}
const filledArray = fillArray(5, '*');
// Reference: https://2ality.com/2018/04/type-notation-typescript.html
