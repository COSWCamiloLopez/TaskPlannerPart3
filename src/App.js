import React, {Component} from 'react';
import Login from './components/Login';
import './App.css';
import AppBarPage from './components/AppBar';
import TaskPlanner from "./components/TaskPlanner";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NewTask from "./components/NewTask";
import UserProfile from "./components/UserProfile";
import RegisterPage from "./components/RegisterPage";

class App extends Component {

    render() {

        const loginView = () => (
            <div>
                <AppBarPage/>
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
            },
            {
                path: "/newtask",
                component: newTaskView
            },
            {
                path: "/profile",
                component: userProfileView
            }
        ];

        const routesNoLogged = [
            {
                path: "/login",
                component: loginView
            },
            {
                path: "/register",
                component: registerPageView
            }
        ];

        const pathsLogged = routesLogged.map((x) => {
            return (
                <Route
                    path={x.path}
                    component={x.component}
                    key={x}
                />
            );
        });

        const pathsNoLogged = routesNoLogged.map((x) => {
            return (
                <Route
                    path={x.path}
                    component={x.component}
                    key={x}
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
