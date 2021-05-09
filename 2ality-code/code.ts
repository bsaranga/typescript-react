// Alias
type Age = number;
const age: Age = 84;

type numberOrString = number | string;
const numStr: numberOrString = "string";

type booleanLike = 0 | 1 | boolean;
const state: booleanLike = true;

// Typing arrays

let myArr: number[] = [];
let arr: Array<number> = [];
let binaryArr: Array<0 | 1> = [];

// Arrays as tuples

let point2d: [number, number] = [5, 0.2];

// Function types

// Structure of function return type
/* (param: type) => returnType */

const foo: (param: string) => number = (p) => Number(p);
foo("5");

// return type is inferred so we can write below

const square = (param: number) => param*param;

// Callback types - we can specify the type of the callback 
// using parameter type and return type with the fat arrow in the middle

function foobar(otherFunc: (num: number) => string) {
    return otherFunc(123);
}

// Optional parameters

function bar(callback?: (num: number) => string) {
    if(!callback) {
        return 0;
    }

    return callback(4);
}

bar();

// Parameter default values

function createPoint( x = 0, y = 0): [number, number] {
    // parameter types are inferred
    return [x,y]
}

// Rest parameter types

function joinNumbers(...nums: number[]) {
    return nums.join('-');
}

// Interfaces describe objects as records

interface Person {
    firstName: string,
    lastName: string,
    age: number,
    company?: string,
    getFullName(): string
}

function PersonFactory(firstName: string, lastName: string, age: number, company?: string): Person {

    let person: Person = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        company: company,
        getFullName: function () {
            return `${this.firstName} ${this.lastName}`
        }
    }

    return person;
}

let saranga = PersonFactory('Saranga', 'Buwaneka', 28);
let saranga2 = PersonFactory('Saranga', 'Buwaneka', 28, 'KronoFlex');

// Type variables and generics

type TypeFactory<X> = X; // definition
type MyType = TypeFactory<string> // usage

let buwaneka: MyType = "this is a string";

interface ValueContainer<Value> {
    value: Value;
}

type StringContainer = ValueContainer<string>;
let boo: StringContainer = { value: "haha" }

// Type parameterized class

class SimpleStack<T> {

    #data: Array<T> = [];

    push(x: T): void {
        this.#data.push(x)
    }

    pop(): T {
        const result = this.#data.pop();
        if(!result) throw new Error('Empty');
        return result;
    }

    get length() {
        return this.#data.length
    }
}

const stringStack = new SimpleStack<string>();
stringStack.push('first');
stringStack.push('second');

// Maps with Typescript (type definition can be dropped to be inferred)

const myMap: Map<boolean, string> = new Map([
    [false, 'no'],
    [true, 'yes']
])

// Type variables for functions

function id<T>(x: T): T {
    return x;
}

id<number>(123);
// or
id(123) // thanks to type inference

function fillArray<T>(len: number, elem: T) {
    return new Array<T>(len).fill(elem);
}

const filledArray = fillArray(5, '*');

// Reference: https://2ality.com/2018/04/type-notation-typescript.html