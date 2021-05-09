namespace constants 
{
    const val1 = 1;
    //val1 = 2 // no reassignment with const variables
    const val2 = [];
    val2.push('hellow') // it is however possible to mutate it
}

namespace letVars 
{
    if(true) { let val1 = 2 }
    //console.log(val1) //compiler shows error because val1 is block scoped
}

namespace whatIsThis
{
    function myFunc(): void{
        //console.log(this)
    }

    //myFunc() // prints the global object
    
    function myFunc2(): void {
        let self = this
        self.myName = 'Saranga'
        self.age = 28
        self.getFull = () => `${self.myName}, ${self.age}`
        self.showThis = () => `${this}`
    }

    let myFuncTwo = new myFunc2()
    //console.log(myFuncTwo.showThis())
}

namespace arrowFuncs
{
    const myFunc = (message: string): void => console.log(message)
    //myFunc('Hello')
}

namespace binding
{
    class A {
        private name: string = 'A'
        go() {
            console.log(`Method of object A`)
            console.log(this.name)
        }
    }

    class B {
        private name: string = 'B'
        go() {
            console.log(`Method of object B`)
            console.log(this.name)
        }
    }

    const a = new A()
    a.go()

    const b = new B()
    b.go = b.go.bind(a)
    b.go()
}