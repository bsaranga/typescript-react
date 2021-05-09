var constants;
(function (constants) {
    var val1 = 1;
    //val1 = 2 // no reassignment with const variables
    var val2 = [];
    val2.push('hellow'); // it is however possible to mutate it
})(constants || (constants = {}));
var letVars;
(function (letVars) {
    if (true) {
        var val1 = 2;
    }
    //console.log(val1) //compiler shows error because val1 is block scoped
})(letVars || (letVars = {}));
var whatIsThis;
(function (whatIsThis) {
    function myFunc() {
        //console.log(this)
    }
    //myFunc() // prints the global object
    function myFunc2() {
        var _this = this;
        var self = this;
        self.myName = 'Saranga';
        self.age = 28;
        self.getFull = function () { return self.myName + ", " + self.age; };
        self.showThis = function () { return "" + _this; };
    }
    var myFuncTwo = new myFunc2();
    //console.log(myFuncTwo.showThis())
})(whatIsThis || (whatIsThis = {}));
var arrowFuncs;
(function (arrowFuncs) {
    var myFunc = function (message) { return console.log(message); };
    //myFunc('Hello')
})(arrowFuncs || (arrowFuncs = {}));
var binding;
(function (binding) {
    var A = /** @class */ (function () {
        function A() {
            this.name = 'A';
        }
        A.prototype.go = function () {
            console.log("Method of object A");
            console.log(this.name);
        };
        return A;
    }());
    var B = /** @class */ (function () {
        function B() {
            this.name = 'B';
        }
        B.prototype.go = function () {
            console.log("Method of object B");
            console.log(this.name);
        };
        return B;
    }());
    var a = new A();
    a.go();
    var b = new B();
    b.go = b.go.bind(a);
    b.go();
})(binding || (binding = {}));
