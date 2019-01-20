import React, {Component} from 'react'
import { firebaseApp } from '../firebase'
import { Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class SignIn extends Component{
    constructor(props){
        super(props)
        this.state={
            email: "",
            password: "",
            error: {
                message: ""
            }
        }
    }

    signIn(){
        console.log("Signup component", this.state)
        const {email, password} = this.state
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
        .catch(error => {
            console.log('signup component', error)
            this.setState({error})
        })
    }

    render(){
        const {user} = this.props
        if(user){
            return <Redirect to={'/'}/>
        }else {
        return(
            <div className='form-inline' style={{margin: '5%'}}>
                <h2>Sign In</h2>
                <div className='form-group'>
                    <input className='form-control'
                        type='text'
                        placeholder='email'
                        style={{marginRight: '5px'}}
                        onChange={event=> this.setState({email: event.target.value})}
                    />
                    <input className='form-control'
                        type='password'
                        placeholder='password'
                        style={{marginRight: '5px'}}
                        onChange={event => this.setState({password: event.target.value})}
                    />
                    <button 
                        className='btn btn-primary' 
                        type='button'
                        onClick={()=> this.signIn()}
                    >
                        Sign In
                    </button>
                </div>
                <div>{this.state.error.message}</div>
                <div><Link to={'/signup'}>signup</Link></div>
            </div>
        )
        }
    }
}

function mapStateToProps(state){
    const{email} = state
    return {
        user: email
    }
}

export default connect(mapStateToProps, null)(SignIn)