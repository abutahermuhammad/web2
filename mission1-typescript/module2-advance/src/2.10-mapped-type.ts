{
    // Mapped type

    const arrayOfNumbers: number[] = [1, 4, 5];

    // Converting number array to string array
    const arrayOfStrings: string[] = arrayOfNumbers.map((number) => number.toString())

    console.log(arrayOfStrings)


    // Example: 1
    type AreaNumber = {
        height: number;
        width: number;
    };


    // Lookup type
    type Height = AreaNumber["height"];


    // Converting type with loop 
    type AreaString<> = {
        [key in keyof AreaNumber]: string;
    };

    // Converting type with loop; Where converted type is taken from the user input generic
    type TypeConverter<T> = {
        [key in keyof T]: T[key];
    };

    const area1: TypeConverter<{ height: string, width: number }> = {
        height: "100",
        width: 50
    }


}