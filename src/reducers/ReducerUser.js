import {SIGN_IN, SIGN_OUT} from '../Constants'

let user = {
    email: null
}

export default (state= user, action)=>{
    console.log('reducers', action)
    switch(action.type){
        case SIGN_IN:
            const {email} = action
            user = { email }
            return user
        case SIGN_OUT:
            user = { email: null }
            return user
        default:
            return user
    }
}