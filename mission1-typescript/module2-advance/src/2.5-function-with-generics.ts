{
    const createArray = (param: string): string[] => {
        return [param];
    }

    const createArrayWithGeneric = <T extends { name: string, id: number }>(param: T): T[] => {
        return [param];
    }

    const resGeneric2 = createArrayWithGeneric<{ id: number, name: string, age: number }>({ id: 453, name: "Muhammad", age: 34 });

    resGeneric2[0].name
}  