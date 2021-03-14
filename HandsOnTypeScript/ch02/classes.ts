class Person {

    constructor(private message: string, readonly field2: number){
        this.internalField = "42"
    }

    private internalField: string

    speak() : void{
        console.log(`${this.message}, the secret of the universe is ${this.internalField}, and ${this.field2}`)
    }
}

const saranga = new Person("Hello World", 45)
saranga.speak()
// saranga.field2 = 45; // Type script compiler warns
console.log(saranga.field2)