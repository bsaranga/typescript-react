var ClassA = /** @class */ (function () {
    function ClassA() {
    }
    ClassA.getFullName = function () {
        return "ClassA." + this.typeName;
    };
    return ClassA;
}());
ClassA.typeName = "jshdfkjs";
console.log(ClassA.getFullName());
