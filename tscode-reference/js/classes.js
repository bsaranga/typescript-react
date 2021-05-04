var Person = /** @class */ (function () {
    function Person(message, field2) {
        this.message = message;
        this.field2 = field2;
        this.internalField = "42";
    }
    Person.prototype.speak = function () {
        console.log(this.message + ", the secret of the universe is " + this.internalField + ", and " + this.field2);
    };
    return Person;
}());
var saranga = new Person("Hello World", 45);
saranga.speak();
// saranga.field2 = 45; // Type script compiler warns
console.log(saranga.field2);
