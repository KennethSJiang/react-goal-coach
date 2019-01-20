import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBavap4gDDIjaS35maZdx18HBZmsl7R7is",
    authDomain: "goal-coach-a0b55.firebaseapp.com",
    databaseURL: "https://goal-coach-a0b55.firebaseio.com",
    projectId: "goal-coach-a0b55",
    storageBucket: "goal-coach-a0b55.appspot.com",
    messagingSenderId: "155184627144"
  }

  export const firebaseApp = firebase.initializeApp(config)
  export const goalRef = firebase.database().ref('goals')
  export const completeGoalRef = firebase.database().ref('completeGoals')