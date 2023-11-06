{
    // Interface
    interface User {
        name: string;
        age: number;
    }

    // Extending User
    interface UserWithRole extends User { role: string }

    const user1: UserWithRole = {
        name: "Muhammad",
        age: 34,
        role: "Manager"
    }

    /**
     * Note:
     * Interface is only allowed in object type data.
     * `type` is allowed for all kinds of data type.
     */
}