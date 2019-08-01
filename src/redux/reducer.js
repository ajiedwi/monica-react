import * as ACTION from './action'

const userData = {
    user: {
        username: '',
        password: ''
    }
    
}

export const userReducer = (state = userData, action) => {
    switch(action.type) {
        case ACTION.LOGIN:
        return {
            ...state.user,
            username: action.payload.username,
            password: action.payload.password
        };
        default:
        // console.log('login'+state.user)        
        return state.user;
    }
}