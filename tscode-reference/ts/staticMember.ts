class ClassA {
    static typeName: string
    public nonStatic: string
    constructor(){}

    static getFullName(): string {
        return `ClassA.${this.typeName}`
    }
}

ClassA.typeName = "jshdfkjs";
console.log(ClassA.getFullName())

const classAInstance = new ClassA();