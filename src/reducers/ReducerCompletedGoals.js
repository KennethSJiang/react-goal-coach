import {ADD_COMPLETED} from '../Constants'

export default(state=[], action)=>{
    switch(action.type){
        case ADD_COMPLETED:
            const {goals} = action
            return goals
        default:
            return state
    }
}