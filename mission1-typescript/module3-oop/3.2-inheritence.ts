{
    // OOP: Inheritance

    // Person class
    // Contains personal information
    class Person {
        constructor(public name: string, public age: number, public address: string) { }

        getSleep(milliseconds: number) {
            console.log(`${this.name} will sleep for ${milliseconds}`)
        }
    }


    // Student class
    // Defines student behaviors derived from `Person` class.
    class Student extends Person {
        constructor(name: string, age: number, address: string) {
            super(name, age, address);
        }

        getSleep(milliseconds: number) {
            console.log(`${this.name} will sleep for ${milliseconds}`)
        }
    }


    // Teacher class
    // Defines teacher behaviors derived from `Person` class.
    class Teacher extends Person {
        constructor(name: string, age: number, address: string, public designation: string) {
            super(name, age, address)
        }

        takeClass(numOfClass: number) {
            console.log(`${this.name} will take ${numOfClass} class`)
        }
    }


    // User case
    const student1 = new Student("Muhammad", 48, "Sylhet, Bangladesh");

    const teacher1 = new Teacher("Ruhul Amin", 48, "UK", "Assistant Teacher");
}