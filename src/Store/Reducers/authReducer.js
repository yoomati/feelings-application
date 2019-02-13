const initState = {
    authError: ''
}


const authReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATE_USER":
            console.log('created user');
            return {
                ...state,
                authError: ""
            };
        case "CREATE_USER_ERROR":
            console.log('created error', action.err.message)
            return {
                ...state,
                authError: action.err.message
            }
        case "LOGIN_SUCCESS":
            console.log('LOGIN_SUCCESS')
            return {
                ...state,
                authError: ""
            };
        case "LOGIN_ERROR":
            console.log('Login Error')
            return {
                ...state,
                authError: action.err.message
            }
        case "SIGNOUT_SUCCESS":
            console.log('signout success')
            return state;
        case "NAME_CHANGE_SUCCESS":
            console.log('name changed');
            return state;
        default:
            return state;
    }
}

export default authReducer;