import React, {Component} from 'react'
import { firebaseApp } from '../firebase'
import { Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import AddGoal from './AddGoal'
import GoalList from './GoalList'
import CompleteGoalsList from './CompleteGoalsList'

class App extends Component{
    signout(){
        firebaseApp.auth().signOut()
    }

    render(){
        const {user} = this.props
        
        console.log('App Component[render]', JSON.stringify(user))
        if(!!user){ 
            return (
                <div>
                    <h3>Goals Coach</h3>
                    <AddGoal/>
                    <hr/>
                    <h4>Goals</h4>
                    <GoalList/>
                    <hr/>
                    <h4>Completed Goals</h4>
                    <CompleteGoalsList/>
                    <hr/>
                    <button className='btn btn-danger'
                    onClick={()=>this.signout()}
                    >Sign out</button>
                </div>
            )
        }else{
            return <Redirect to='/signin'/>
        }
    }
}

function mapStateToProps(state){
    console.log('mapStateToProps', state)
    const { user } = state
    return {
        user
    }
}

export default connect(mapStateToProps, null)(App)