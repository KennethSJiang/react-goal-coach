import React, {Component} from 'react'
import {goalRef} from '../firebase'
import {connect} from 'react-redux'

class AddGoal extends Component{
    constructor(props){
        super(props)
        this.state={
            title: ''
        }
    }

    addGoal(){
        const {title} = this.state
        const {user} = this.props

        goalRef.push({email: user.email, title})
    }

    render(){
        return(
            <div className='form-inline'>
                <div className='form-group'>
                    <input className='form-control'
                    type='text'
                    placeholder='Add a goal'
                    style={{marginRight: '5px'}}
                    onChange={event=>this.setState({title: event.target.value})}
                    />
                    <button 
                    type='button'
                    className='btn btn-success'
                    onClick={()=>this.addGoal()}
                    >Submit</button>
                </div>
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

export default connect(mapStateToProps, null)(AddGoal)