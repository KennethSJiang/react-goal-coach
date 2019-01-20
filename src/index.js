import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import { BrowserRouter, Route } from 'react-router-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './reducers'
import { firebaseApp } from './firebase'
import {logUser, logoutUser} from './actions'

const store = createStore(reducer);
firebaseApp.auth().onAuthStateChanged(user => {
    if(user){
        console.log('user has signed in or up', user)
        store.dispatch(logUser(user.email))
    }else{
        console.log('user has signed out or still need to sign in')
        store.dispatch(logoutUser())
    }
})

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
        </div>
    </BrowserRouter></Provider>, document.getElementById('root')
)