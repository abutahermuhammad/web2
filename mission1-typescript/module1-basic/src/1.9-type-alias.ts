// Type Alias

type Student = {
    readonly name: string;
    age: number;
    gender: "male" | "female";
    phone?: string;
    address: string;
    isAdmin: boolean;
}

const student: Student = {
    name: "John Doe",
    age: 34,
    gender: "male",
    phone: "01xxxxxxxxx",
    address: "sylhet",
    isAdmin: true
}
const student1: Student = {
    name: "Emily",
    age: 34,
    gender: "female",
    phone: "01xxxxxxxxx",
    address: "sylhet",
    isAdmin: false
}
