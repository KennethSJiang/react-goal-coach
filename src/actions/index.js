import {SIGN_IN, SIGN_OUT, ADD_GOALS, ADD_COMPLETED} from '../Constants'

export function logUser(email){
    console.log('action[logUser]', email)
    const action ={
        type: SIGN_IN,
        email
    }
    return action
}

export function logoutUser(){
   console.log('action[logoutuser]') 
   const action={
       type: SIGN_OUT,
   }
   return action
}

export function addGoals(goals){
    const action = {
        type: ADD_GOALS,
        goals
    }

    return action
}

export function addCompleted(goals){
    const action = {
        type: ADD_COMPLETED,
        goals
    }

    return action
}