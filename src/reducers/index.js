import {combineReducers} from 'redux'
import user from './ReducerUser'
import goals from './ReducerGoals'
import completedGoals from './ReducerCompletedGoals'

export default combineReducers({
    user,
    goals,
    completedGoals,
})