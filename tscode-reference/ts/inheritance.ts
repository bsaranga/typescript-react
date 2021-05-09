class Vehicle {
    constructor(protected wheelCount: number){}

    showNumberOfWheels(): string {
        return `Wheel Count: ${this.wheelCount}`
    }
}

class Motorcycle extends Vehicle{

    constructor(){
        super(2)
    }

    updateWheelCount(newWheelCount: number) {
        this.wheelCount = newWheelCount
    }
}

class Automobile extends Vehicle {
    constructor() {
        super(4)
    }
}

const motorcycle = new Motorcycle()
const auto = new Automobile()
console.log(motorcycle.showNumberOfWheels())
console.log(auto.showNumberOfWheels())