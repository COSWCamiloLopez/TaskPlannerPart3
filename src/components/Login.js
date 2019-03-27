import React, {Component} from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import AppBarPage from "./AppBar";
import LoginForm from "./LoginForm";
import Typography from "@material-ui/core/Typography";
import PaperComponent from "./PaperComponent";

const styles = theme => ({
    title: {
        paddingBottom: 20
    }
});

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {

        const {classes} = this.props;

        const createAccount = (
            <Typography className={classes.title}>
                Don't have an account? Create one <a href="/register">here</a>
            </Typography>
        );

        const loginForm = (
            <LoginForm/>
        );

        return (
            <>
                <AppBarPage/>
                <PaperComponent
                    form={loginForm}
                    createAccount={createAccount}
                    title="Sign in"
                />
            </>
        );
    }
}

export default withStyles(styles)(Login);