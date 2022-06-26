const initialState = {
    loggedIn: false,
    id: ""
}

const authReducer = (state=initialState, action) => {
    switch(action.type){
        case "LOG_IN": return{
            ...state,
            loggedIn: true,
            id: action.payload.payload.data.userWithToken._id
        }

        case "LOG_OUT": return {
            initialState
        }

        default: return state
    }
}

export default authReducer