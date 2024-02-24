const eventData = [
    {
        "title": "MIT Pokerfest",
        "location": "MIT",
        "date": "2024-04-06",
        "time": "13:00:00",
        "url": "https://poker.mit.edu/"
    },
    {
        "title": "Poker AI Contest",
        "location": "DH 2210",
        "date": "2024-03-30",
        "time": "10:30:00",
        "url": "/events/pokerai"
    },
    {
        "title": "SoCal Tournament",
        "location": "Harvey Mudd",
        "date": "2024-03-23",
        "time": "12:00:00",
        "url": "https://www.socalcollegepoker.com/"
    },
    {
        "title": "SIG Tournament",
        "location": "Tepper Simmons",
        "date": "2024-03-17",
        "time": "09:30:00",
        "url": "/events/tournament"
    },
    {
        "title": "Lunar New Year Tournament",
        "location": "Tepper Simmons",
        "date": "2024-02-25",
        "time": "14:00:00",
        "url": "/events/tournament"
    },
    {
        "title": "SIG Qualifier",
        "location": "Online",
        "date": "2024-02-24",
        "time": "15:00:00",
        "url": "https://discord.gg/EAX4DHhMm4"
    },
    {
        "title": "Tournament Workshop",
        "location": "Tepper Simmons",
        "date": "2024-02-17",
        "time": "15:00:00",
        "url": "/events/gbm"
    },
    {
        "title": "Superbowl GBM",
        "location": "Tepper Simmons B",
        "date": "2024-02-11",
        "time": "18:00:00",
        "url": "/events/gbm"
    },
    {
        "title": "Pokerfest Qualifier",
        "location": "Online",
        "date": "2024-02-03",
        "time": "13:00:00",
        "url": "https://docs.google.com/forms/d/e/1FAIpQLScOcUc4Azf9H0fbSed4z6Aq2-G-CHymnVFm0K7_gQ7-XM_Sog/viewform"
    },
    {
        "title": "CMU Winter Fair",
        "location": "UC Rangos, Table 78",
        "date": "2024-02-01",
        "time": "17:00:00",
        "url": "https://www.cmu.edu/student-affairs/slice/involvement/traditions/fair.html"
    },
    {
        "title": "GBM",
        "location": "UC Connan",
        "date": "2024-01-27",
        "time": "18:30:00",
        "url": "/events/gbm"
    },
    {
        "title": "GBM",
        "location": "Tepper Simmons",
        "date": "2023-12-03",
        "time": "14:00:00",
        "url": "/events/gbm"
    },
    {
        "title": "Tournament",
        "location": "Tepper Simmons",
        "date": "2023-11-18",
        "time": "13:00:00",
        "url": "/events/tournaments"
    },
    {
        "title": "GBM",
        "location": "Tepper Simmons",
        "date": "2023-11-04",
        "time": "14:00:00",
        "url": "/events/gbm"
    },
    {
        "title": "Edu Session",
        "location": "UC Connan",
        "date": "2023-10-08",
        "time": "14:00:00",
        "url": "/events/gbm"
    },
    {
        "title": "GBM",
        "location": "UC Rangos",
        "date": "2023-09-24",
        "time": "14:00:00",
        "url": "/events/gbm"
    },
    {
        "title": "Edu Session",
        "location": "UC McKenna",
        "date": "2023-09-16",
        "time": "14:00:00",
        "url": "/events/gbm"
    },
    {
        "title": "GBM",
        "location": "Tepper Simmons",
        "date": "2023-09-02",
        "time": "13:00:00",
        "url": "/events/gbm"
    },
    {
        "title": "Xuan Liu Tournament",
        "location": "UC Rangos",
        "date": "2023-04-02",
        "time": "12:00:00",
        "url": "/events/tournaments"
    },
    {
        "title": "GBM",
        "location": "UC Connan",
        "date": "2023-03-12",
        "time": "17:00:00",
        "url": "/events/gbm"
    },
    {
        "title": "Tournament",
        "location": "UC Rangos",
        "date": "2023-02-05",
        "time": "12:00:00",
        "url": "/events/tournaments"
    },
    {
        "title": "GBM",
        "location": "Danforth Lounge",
        "date": "2023-01-21",
        "time": "12:00:00",
        "url": "/events/gbm"
    },
    {
        "title": "Citadel Tournament",
        "location": "Tepper Simmons",
        "date": "2022-10-08",
        "time": "12:00:00",
        "url": "/events/tournaments"
    },
    {
        "title": "GBM",
        "location": "UC Connan",
        "date": "2022-10-02",
        "time": "18:00:00",
        "url": "/events/gbm"
    },
    {
        "title": "Edu Session",
        "location": "UC Rangos",
        "date": "2022-09-25",
        "time": "14:30:00",
        "url": "/events/gbm"
    },
    {
        "title": "GBM",
        "location": "UC Connan",
        "date": "2022-09-17",
        "time": "15:00:00",
        "url": "/events/gbm"
    },
    {
        "title": "Edu Session",
        "location": "UC Connan",
        "date": "2022-09-09",
        "time": "19:00:00",
        "url": "/events/gbm"
    },
    {
        "title": "GBM",
        "location": "UC Connan",
        "date": "2022-09-02",
        "time": "17:30:00",
        "url": "/events/gbm"
    }
];

/**
 * @param {{ title: string; location: string; date: string; time: string; url: string;}[]} items
 */
function constructEvents(items) {
    let construct = [];
    for (const item of items) {
        construct.push({"title": item["title"], "start": item["date"] + "T" + item["time"], "url": item["url"]});
        construct.push({"title": item["location"], "start": item["date"]});
    }
    return construct;
};

export const events = constructEvents(eventData);
