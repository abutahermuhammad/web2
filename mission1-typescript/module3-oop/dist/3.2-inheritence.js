"use strict";
{
    // OOP: Inheritance
    // Person class
    // Contains personal information
    class Person {
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(milliseconds) {
            console.log(`${this.name} will sleep for ${milliseconds}`);
        }
    }
    // Student class
    // Defines student behaviors derived from `Person` class.
    class Student extends Person {
        constructor(name, age, address) {
            super(name, age, address);
        }
        getSleep(milliseconds) {
            console.log(`${this.name} will sleep for ${milliseconds}`);
        }
    }
    // Teacher class
    // Defines teacher behaviors derived from `Person` class.
    class Teacher extends Person {
        constructor(name, age, address, designation) {
            super(name, age, address);
            this.designation = designation;
        }
        takeClass(numOfClass) {
            console.log(`${this.name} will take ${numOfClass} class`);
        }
    }
    // User case
    const student1 = new Student("Muhammad", 48, "Sylhet, Bangladesh");
    const teacher1 = new Teacher("Ruhul Amin", 48, "UK", "Assistant Teacher");
}
