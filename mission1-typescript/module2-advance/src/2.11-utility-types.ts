{
    // Utility Types

    // Default Person Type
    type Person = {
        name: string;
        age: number;
        email?: string;
        phone: string;
    }

    // Pick Utility
    // This will create a new type from another type with user defined attributes.
    type NameAge = Pick<Person, "name" | "age">;

    // Omit
    // This will create a new type from another type by removing user defined attributes.
    type ContactInfo = Omit<Person, "name" | "age">;

    // Required
    // This will create a new type by parsing attributes from another type while making them required.
    type PersonRequired = Required<Person>;

    // Partial
    // This will create a new type by parsing attributes from another type while making them optional.
    type PersonPartial = Partial<Person>;

    // Readonly
    // This will create a new type by parsing attributes from another type while making them readonly.
    type PersonReadonly = Readonly<Person>;

    // Record
    // This will define a object template.
    // `Record` takes 2 parameters. 1st: key type & 2nd: value type
    type MyObj = Record<string, string>;

    const obj1: MyObj = {
        name: "John Doe",
        age: "45"
    }

}