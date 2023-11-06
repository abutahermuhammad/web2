{
    const getPropertyValue = <x, y extends keyof x>(obj: x, key: y) => {
        return obj[key];
    }

    const user = {
        name: "Muhammad",
        age: 45,
        address: "ctg"
    }

    const result1 = getPropertyValue(user, 'name')
    console.log(result1)
}