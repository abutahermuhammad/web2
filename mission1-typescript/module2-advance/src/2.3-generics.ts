{
    // Generic Array
    type GenericArray<T> = Array<T>;


    // const roleNumbers: number[] = [3, 6, 8];
    const roleNumbers: GenericArray<number> = [3, 6, 8];

    const mentors: GenericArray<string> = ["Mr. X", "mr. Y", "John Doe"];

    const boolArray: GenericArray<boolean> = [true, false, true];

    const user: GenericArray<{ name: string, age: number }> = [
        {
            name: "Mezba",
            age: 100
        },
        {
            name: "Jhankar",
            age: 34
        }
    ];

    /**
     * Note:
     */
}