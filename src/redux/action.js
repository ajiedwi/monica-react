
// dipatch mode
export const ADD_NOTE = 'ADD_NOTE'
export const LOGIN = 'LOGIN'

export const addNote = text => {
    return {
        type: ADD_NOTE,
        payload: text
    }
}

export const login = user => {
    return {
        type: LOGIN,
        payload: user
    }
}