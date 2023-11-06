"use strict";
{
    const getPropertyValue = (obj, key) => {
        return obj[key];
    };
    const user = {
        name: "Muhammad",
        age: 45,
        address: "ctg"
    };
    const result1 = getPropertyValue(user, 'name');
    console.log(result1);
}
