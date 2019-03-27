import React, {Component} from 'react';
import Login from './components/Login';
import './App.css';
import TaskPlanner from "./components/TaskPlanner";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NewTask from "./components/NewTask";
import UserProfile from "./components/UserProfile";
import RegisterPage from "./components/RegisterPage";

class App extends Component {

    render() {

        const loginView = () => (
            <div>
                <Login/>
            </div>
        );

        const taskPlannerView = () => (
            <div>
                <TaskPlanner/>
            </div>
        );

        const newTaskView = () => (
            <NewTask/>
        );

        const userProfileView = () => (
            <UserProfile/>
        );

        const registerPageView = () => (
            <RegisterPage/>
        );

        const routesLogged = [
            {
                path: "/tasks",
                component: taskPlannerView
            }, {
                path: "/profile",
                component: userProfileView
            }, {
                path: "/newtask",
                component: newTaskView
            }
        ];

        const routesNoLogged = [
            {
                path: "/",
                component: loginView
            }, {
                path: "/register",
                component: registerPageView
            }
        ];

        const pathsLogged = routesLogged.map((x, i) => {
            return (
                <Route
                    path={x.path}
                    component={x.component}
                    key={i}
                />
            );
        });

        const pathsNoLogged = routesNoLogged.map((x, i) => {
            return (
                <Route
                    exact
                    path={x.path}
                    component={x.component}
                    key={i}
                />
            );
        });

        const isLogged = localStorage.getItem('isLoggedIn');

        return (
            <Router>
                <div className="App">
                    {isLogged === "true" ? pathsLogged : pathsNoLogged}
                </div>
            </Router>
        );
    }
}

export default App;
