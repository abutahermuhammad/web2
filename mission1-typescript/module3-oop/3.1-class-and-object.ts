{
    // OOP: Fundamental

    class Animal {
        // Class properties
        // Note:
        //      - Generally, properties are publicly available.
        // name: string;
        species: string;
        sound: string;

        // Class constructor
        // Note:
        //      - By defining `public` before parameter name we can create class property automatically.
        constructor(public name: string, species: string, sound: string) {
            // this.name = name;
            this.species = species;
            this.sound = sound;
        }

        // Methods
        makeSound() {
            console.log(`The ${this.name} sys ${this.sound}`);
        }
    }

    // Creating a new instance
    const dog = new Animal("German Shepard", "dog", "ghew ghew");
    const cat = new Animal("Persian Cat", "cat", "meaw meaw");

    cat.makeSound()
}