const initState = {
    projects: [
        {
            id: 0,
            author: "Ruslav",
            content: "ble ble ble ble",
            comments: [
                {
                    id: 0,
                    author: "blay",
                    content: "sssaaaaas whoa whoa whoa whoa whoa whoa whoa whoa whoa whoa"
                },
                {
                    id: 1,
                    author: "Catrine",
                    content: "ohh boy"
                },
            ]
        },
        {
            id: 1,
            author: "Georgy",
            content: "whoa whoa whoa"
        }
    ]
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATE_NEW_POST":
            return state;
        case "ERROR_CREATE_NEW_POST":
            return state;
        default:
            return state;
    }


}

export default projectReducer;