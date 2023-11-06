{
    interface Developer<T> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: string;
        }
        smartWatch: T
    }

    const dev1: Developer<{
        brand: string,
        model: string,
        display: string
    }> = {
        name: "Mezba",
        computer: {
            brand: "HP",
            model: "G3 840",
            releaseYear: "2017"
        },
        smartWatch: {
            brand: "Apple",
            model: "watch 8",
            display: "OLED"
        }
    }

    const dev2: Developer<{
        brand: string,
        model: string,
        display: string,
        heartTrack: boolean,
        sleepTrack: boolean,
    }> = {
        name: "Mezba",
        computer: {
            brand: "HP",
            model: "G3 840",
            releaseYear: "2017"
        },
        smartWatch: {
            brand: "Apple",
            model: "watch 8",
            display: "OLED",
            heartTrack: true,
            sleepTrack: true
        }
    }

    /**
     * Note:
     */
}