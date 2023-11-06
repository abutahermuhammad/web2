"use strict";
{
    // OOP: Type Gard
    // Typeof guard
    // In guard
    class Animal {
        constructor(name, species) {
            this.name = name;
            this.species = species;
        }
        // Methods
        makeSound() {
            console.log(`I'm making sound!`);
        }
    }
    class Dog extends Animal {
        constructor(name, species) {
            super(name, species);
            this.name = name;
            this.species = species;
        }
        makeBark() {
            console.log('I am barking!');
        }
    }
    class Cat extends Animal {
        constructor(name, species) {
            super(name, species);
            this.name = name;
            this.species = species;
        }
        makeMewe() {
            console.log('I am Mewing!');
        }
    }
    const getAnimal = (animal) => {
        // Dog type guard
        if (animal instanceof Dog) {
            animal.makeBark();
        }
        // Cat type guard
        if (animal instanceof Cat) {
            animal.makeMewe();
        }
    };
    // Creating a new instance
    const dog = new Dog("German Shepard", "dog");
    const cat = new Cat("Persian Cat", "cat");
    getAnimal(dog);
    getAnimal(cat);
}
