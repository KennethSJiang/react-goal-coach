import React, {Component} from 'react'
import {completeGoalRef} from '../firebase'
import {connect} from 'react-redux'
import {addCompleted} from '../actions'

class CompleteGoalsList extends Component{
    componentDidMount(){
        completeGoalRef.on('value', snap => {
            let completedGoals = []
            snap.forEach(goal => {
                const {email, title} = goal.val()
                completedGoals.push({email, title})
            })

            console.log('completedGoals', completedGoals)
            this.props.addCompleted(completedGoals)
        })
    }

    clearCompleted(){
        completeGoalRef.set([])
    }

    render(){
        const{completedGoals} = this.props
        console.log('CompletedGoalsList[component]', completedGoals)
        return(
            <div>
                {
                    completedGoals && completedGoals.map((goal, index) => {
                        const {email, title} = goal
                        return(
                            <div key={index}>
                                <strong>{title}</strong>
                                completed by <em>{email}</em>
                            </div>
                        )
                    })
                }
                <button
                    className = 'btn btn-primary'
                    onClick={()=>this.clearCompleted()}
                >
                Clear All
                </button>
            </div>
        )
    }
}

function mapStateToProps(state){
    const {completedGoals} = state
    return {
        completedGoals
    }
}

export default connect(mapStateToProps, {addCompleted})(CompleteGoalsList)