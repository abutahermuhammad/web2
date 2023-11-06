{
    type a1 = null;
    type b1 = undefined;

    // x = 1 when a1 extends null
    type x = a1 extends null ? true : false;

    // Nested type checking 
    type y = a1 extends null ? true : b1 extends undefined ? undefined : any;


    // Example
    type Sheikh = {
        bike: string;
        car: string;
        ship: string;
    }

    // Returns `true` when a given type has car, bike, ship.
    type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

    type HasBike = CheckVehicle<"bike">;  // Return: true

    type HasPlane = CheckVehicle<"plane">;  // Return: false
}