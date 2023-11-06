const user1 = {
    id: 453,
    name: {
        firstName: "Abu Taher",
        middleName: "",
        lastName: "Muhammad"
    },
    phone: "01xxxxxxxxx",
    address: "Bangladesh"
}

// Object Destructure
// Name Alias
const { phone, name: { firstName: mName } } = user1;

// Array Destructure
const myFriends = ['chandler', 'joy', 'ross', 'rachel'];

const [, , bestFriend, ...otherFriends] = myFriends;