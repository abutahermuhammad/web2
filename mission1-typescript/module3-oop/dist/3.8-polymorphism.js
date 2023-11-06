"use strict";
{
    class Person {
        getSleep() {
            console.log('I am sleeping for 8 hours');
        }
    }
    class Student extends Person {
    }
    class Developer extends Person {
        getSleep() {
            console.log("Developers do not sleep at night!");
        }
    }
    const std1 = new Student();
    std1.getSleep();
    const dev1 = new Developer();
    dev1.getSleep();
}
