{
    // OOP: Type Gard
    // Typeof guard
    // In guard

    class Animal {
        constructor(public name: string, public species: string) { }

        // Methods
        makeSound() {
            console.log(`I'm making sound!`);
        }
    }

    class Dog extends Animal {
        constructor(public name: string, public species: string) {
            super(name, species);
        }

        makeBark() {
            console.log('I am barking!')
        }
    }

    class Cat extends Animal {
        constructor(public name: string, public species: string) {
            super(name, species);
        }

        makeMewe() {
            console.log('I am Mewing!')
        }
    }


    const getAnimal = (animal: Animal) => {
        // Dog type guard
        if (animal instanceof Dog) {
            animal.makeBark();
        }

        // Cat type guard
        if (animal instanceof Cat) {
            animal.makeMewe();
        }
    }


    // Creating a new instance
    const dog = new Dog("German Shepard", "dog");
    const cat = new Cat("Persian Cat", "cat");

    getAnimal(dog)
    getAnimal(cat)
}