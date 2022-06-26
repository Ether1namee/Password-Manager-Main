export const logIn = (payload) => {
    return {
        type: "LOG_IN",
        payload: payload
    }
}

export const logOut = () => {
    return {
        type: "LOG_OUT"
    }
}