const initState = {
    authError: ''
}


const authReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATE_USER":
            return {
                ...state,
                authError: ""
            };
        case "CREATE_USER_ERROR":
            return {
                ...state,
                authError: action.err.message
            }
        case "LOGIN_SUCCESS":
            return {
                ...state,
                authError: ""
            };
        case "LOGIN_ERROR":
            return {
                ...state,
                authError: action.err.message
            }
        case "SIGNOUT_SUCCESS":
            return state;
        case "NAME_CHANGE_SUCCESS":
            return state;
        default:
            return state;
    }
}

export default authReducer;