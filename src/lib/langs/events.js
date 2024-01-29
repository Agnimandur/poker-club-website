const eventData = [
    {
        "title": "GBM",
        "location": "UC Connan",
        "date": "2024-01-27",
        "time": "18:30:00"
    },
    {
        "title": "GBM",
        "location": "Tepper Simmons",
        "date": "2023-12-03",
        "time": "14:00:00"
    },
    {
        "title": "Tournament",
        "location": "Tepper Simmons",
        "date": "2023-11-18",
        "time": "13:00:00"
    },
    {
        "title": "GBM",
        "location": "Tepper Simmons",
        "date": "2023-11-04",
        "time": "14:00:00"
    },
    {
        "title": "Edu Session #2",
        "location": "UC Connan",
        "date": "2023-10-08",
        "time": "14:00:00"
    },
    {
        "title": "GBM",
        "location": "UC Rangos",
        "date": "2023-09-24",
        "time": "14:00:00"
    },
    {
        "title": "Edu Session #1",
        "location": "UC McKenna",
        "date": "2023-09-16",
        "time": "14:00:00"
    },
    {
        "title": "GBM",
        "location": "Tepper Simmons",
        "date": "2023-09-02",
        "time": "13:00:00"
    },
];

/**
 * @param {{ title: string; location: string; date: string; time: string; }[]} items
 */
function constructEvents(items) {
    let construct = [];
    for (const item of items) {
        construct.push({"title": item["title"], "start": item["date"] + "T" + item["time"]});
        construct.push({"title": item["location"], "start": item["date"]});
    }
    return construct;
};

export const events = constructEvents(eventData);