import {ADD_GOALS} from '../Constants'

export default (state =[], action) => {
    switch(action.type){
        case ADD_GOALS:
            const {goals} = action
            return goals
        default:
            return state
    }
}