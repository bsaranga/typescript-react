class Person {

    constructor(private message: string){
        this.internalField = "42"
    }

    private internalField: string

    speak() : void{
        console.log(`${this.message}, the secret of the universe is ${this.internalField}`)
    }
}

const saranga = new Person("Hello World")
saranga.speak()