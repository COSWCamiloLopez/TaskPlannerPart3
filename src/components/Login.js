import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import loginIcon from '../images/loginIcon.png';

const styles = theme => ({
    button: {
        width: '30%'
    },
    text: {
        width: '30%'
    },
    image: {
        width: '10%',
        marginTop: '3%'
    }
});

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: "",
            password: ""
        }

        this.handleChangeUser = this.handleChangeUser.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRegisterPage = this.handleRegisterPage.bind(this);
    }

    render() {
        const {classes} = this.props;
        return (
            <div>
                <br/>
                <img
                    src={loginIcon}
                    className={classes.image}
                    alt=""
                />
                <br/>
                <form
                    id="loginForm"
                    className={classes.form}
                    onSubmit={this.handleSubmit}
                >
                    <TextField
                        required
                        id="user"
                        label="User"
                        margin="normal"
                        className={classes.text}
                        variant="outlined"
                        onChange={this.handleChangeUser}
                    />
                    <br/>
                    <TextField
                        required
                        id="password"
                        label="Password"
                        type="password"
                        margin="normal"
                        variant="outlined"
                        className={classes.text}
                        onChange={this.handleChangePassword}
                    />
                    <br/>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        type="submit"
                    >
                        Login
                    </Button>
                    <br/>
                    <br/>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={this.handleRegisterPage}
                    >
                        Sign up
                    </Button>
                </form>
            </div>
        );
    }

    handleChangeUser(e) {
        this.setState({user: e.target.value});
    }

    handleChangePassword(e) {
        this.setState({password: e.target.value})
    }

    handleSubmit(e) {

        e.preventDefault();

        if (localStorage.getItem("users") !== null) {

            const users = JSON.parse(localStorage.getItem("users"));

            for (let x in users.list) {
                if (users.list[x].username === this.state.user && users.list[x].password === this.state.password) {
                    localStorage.setItem("userLogged", users.list[x].username);
                    localStorage.setItem("isLoggedIn", "true");
                    window.location.href = "/tasks";
                }
            }
            if (localStorage.getItem("isLoggedIn") !== "true") {
                alert("Incorrect user or password");
                document.getElementById("loginForm").reset();
            }

        } else {
            alert("There is no users registered, please sign up");
            window.location.href = "/register";
        }
    }


    handleRegisterPage() {
        window.location.href = "/register";
    }
}

export default withStyles(styles)(Login);