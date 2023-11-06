"use strict";
{
    const createArray = (param) => {
        return [param];
    };
    const createArrayWithGeneric = (param) => {
        return [param];
    };
    const resGeneric2 = createArrayWithGeneric({ id: 453, name: "Muhammad", age: 34 });
    resGeneric2[0].name;
}
