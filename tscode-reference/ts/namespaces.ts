namespace A {
    class FirstClass{

    }
}

namespace B {
    class SecondClass{

    }

    const test = new FirstClass() // FirstClass is not a part of this namespace, hence the error
}