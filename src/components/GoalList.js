import React, {Component} from 'react'
import {connect} from 'react-redux'
import {goalRef} from '../firebase'
import {addGoals} from '../actions'
import GoalItem from './GoalItem'

class GoalList extends Component{
    componentDidMount(){
        goalRef.on('value', snap => {
            let goals = []
            snap.forEach(goal => {
                const {email, title} = goal.val()
                const serverKey = goal.key
                console.log('goalObject', goal.val())
                goals.push({email, title, serverKey})
            })
            console.log('goals', goals)
            this.props.addGoals(goals)
        })
    }

    render(){
        const {goals} = this.props
        return(
            <div>{
                goals.map((goal, index) => {
                    return (
                        <GoalItem goal={goal} key={index}/>
                    )
                })
            }</div>
        )
    }
}

function mapStateToProps(state){
    const {goals} = state
    return {
        goals
    }
}


export default connect(mapStateToProps, {addGoals})(GoalList)