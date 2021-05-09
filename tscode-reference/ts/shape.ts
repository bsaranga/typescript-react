class Person {
    name: string
}

const jill: {name: string} = {
    name: "Jill Jackson"
}

const person: Person = jill;

console.log(person)

let someValue: any = 90;
someValue = "A string now";