var InterfaceInheritance;
(function (InterfaceInheritance) {
    var Motorcycle = /** @class */ (function () {
        function Motorcycle(name) {
            this.name = name;
        }
        Motorcycle.prototype.updateWheelCount = function (newWheelCount) {
            this.wheelCount = newWheelCount;
            console.log("Automobile has " + this.wheelCount);
        };
        Motorcycle.prototype.showNumberOfWheels = function () {
            console.log("Got " + this.wheelCount + " wheels");
        };
        Motorcycle.prototype.getFullName = function () {
            return "MC-" + this.name;
        };
        return Motorcycle;
    }());
    var moto = new Motorcycle("beginner-cycle");
    console.log(moto.getFullName());
})(InterfaceInheritance || (InterfaceInheritance = {}));
