{
    // static
    // Note:
    //      - This will share a single global instance values to other instances.
    class Counter {
        static count: number = 0;

        static increment() {
            return Counter.count += 1;
        }

        static decrement() {
            return Counter.count -= 1;
        }
    }

    console.log(Counter.increment())
    console.log(Counter.decrement())
}