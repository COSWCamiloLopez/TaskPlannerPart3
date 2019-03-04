import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAFPNr5dBlaiLb1QJqp1YOTNRIGzn0QLpQ",
    authDomain: "task-planner-app-f396d.firebaseapp.com",
    databaseURL: "https://task-planner-app-f396d.firebaseio.com",
    projectId: "task-planner-app-f396d",
    storageBucket: "task-planner-app-f396d.appspot.com",
    messagingSenderId: "495126587051"
};
firebase.initializeApp(config);

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
