import React, {Component} from 'react'
import {completeGoalRef, goalRef} from '../firebase'
import {connect} from 'react-redux'

class GoalItem extends Component{
    completeGoal(){
        //add to complete goals on the database
        const {email} = this.props.user
        const {title, serverKey} = this.props.goal
        console.log('email', email, 'title', title, 'serverKey', serverKey)
        completeGoalRef.push({email, title})

        //rmove this goal
        goalRef.child(serverKey).remove()
    }

    render(){
        const {goal} = this.props
        const {email, title} = goal
        return(
            <div style={{margin: '5px'}}>
                <strong>{title}</strong>
                <span style={{marginRight: '5px'}}> submitted by <em>{email}</em></span>
                <button
                    className='btn btn-sm btn-primary'
                    type='button'
                    onClick={()=>this.completeGoal()}
                >
                Complete
                </button>
            </div>
        )
        }
}

function mapStateToProps(state){
    const {user} = state
    return {
        user
    }
}

export default connect(mapStateToProps, null)(GoalItem)