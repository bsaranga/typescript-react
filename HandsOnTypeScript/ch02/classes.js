var Person = /** @class */ (function () {
    function Person(message) {
        this.message = message;
        this.internalField = "42";
    }
    Person.prototype.speak = function () {
        console.log(this.message + ", the secret of the universe is " + this.internalField);
    };
    return Person;
}());
var saranga = new Person("Hello World");
saranga.speak();
