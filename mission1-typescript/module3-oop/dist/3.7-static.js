"use strict";
{
    // static
    // Note:
    //      - This will share a single global instance values to other instances.
    class Counter {
        static increment() {
            return Counter.count += 1;
        }
        static decrement() {
            return Counter.count -= 1;
        }
    }
    Counter.count = 0;
    console.log(Counter.increment());
    console.log(Counter.decrement());
}
