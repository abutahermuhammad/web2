{
    type Todo = {
        id: number;
        userId: number;
        title: string;
        completed: boolean;
    }

    const createPromise = (): Promise<Todo> => {
        return new Promise(async (resolve, reject) => {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
            const data = await response.json();

            if (data) {
                resolve(data)
            } else {
                reject("failed to fetch data!")
            }
        })
    }

    // Calling promise
    const showData = async () => {
        const data = await createPromise();
        console.log(data)
    }

    // Showing data
    showData()
}