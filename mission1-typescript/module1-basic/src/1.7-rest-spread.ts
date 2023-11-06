// Spread Operator
const mentors1 = {
    typescript: "Mezba",
    redux: "MIr",
    dbms: "Nahid"
}
const mentors2 = {
    prisma: "Firoz",
    next: "Tonmoy",
    cloud: "Nahid"
}

const mentors = {
    ...mentors1,
    ...mentors2
}


// Rest Operator
const greetFriends = (...friends: string[]): void => {
    friends.forEach((friend) => console.log(`Hi, ${friend}`))
}
greetFriends('Rahim', 'Korim', 'Jobbar')