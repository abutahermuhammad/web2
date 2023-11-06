"use strict";
{
    class Vehicle1 {
        startEngine() {
            console.log('Starting engine');
        }
        stoptEngine() {
            console.log('Stop engine');
        }
        move() {
            console.log('Moving engine');
        }
    }
    // Implementing with class
    class AbstractCar {
        startEngine() {
            console.log('Starting engine');
        }
        stoptEngine() {
            console.log('Stop engine');
        }
        move() {
            console.log('Moving engine');
        }
    }
    class Car extends AbstractCar {
    }
    const hondaCar = new Car();
    hondaCar.move();
}
