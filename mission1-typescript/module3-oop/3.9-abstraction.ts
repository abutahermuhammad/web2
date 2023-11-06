{
    // Abstraction
    // Ways to Accomplishment
    //      1. Interface
    //      2. Abstract

    // Implementing with Interface
    interface Vehicle1 {
        startEngine(): void;
        stoptEngine(): void;
        move(): void;
    }

    class Vehicle1 implements Vehicle1 {
        startEngine(): void {
            console.log('Starting engine');
        }

        stoptEngine(): void {
            console.log('Stop engine');
        }

        move(): void {
            console.log('Moving engine');
        }
    }


    // Implementing with class
    abstract class AbstractCar {
        abstract startEngine(): void;
        abstract stoptEngine(): void;
        abstract move(): void;
    }

    class Car extends AbstractCar {
        startEngine(): void {
            console.log('Starting engine');
        }

        stoptEngine(): void {
            console.log('Stop engine');
        }

        move(): void {
            console.log('Moving engine');
        }
    }

    const hondaCar = new Car()
    hondaCar.move()
}