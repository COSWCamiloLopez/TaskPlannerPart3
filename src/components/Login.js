import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import loginIcon from '../images/loginIcon.png';
import AppBarPage from "./AppBar";
import LoginForm from "./LoginForm";
import RegisterPage from "./RegisterPage";

const styles = theme => ({});

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {

        const {classes} = this.props;

        return (
            <>
                <AppBarPage/>
                <LoginForm/>
                <RegisterPage/>
            </>
        );
    }
}

export default withStyles(styles)(Login);