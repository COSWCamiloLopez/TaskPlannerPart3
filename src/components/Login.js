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

        (async () => {
            const rawResponse = await fetch('https://task-planner-api.herokuapp.com/user/username/' + this.state.user);

            try {
                const content = await rawResponse.json();
                console.log(content)
                if (content.password === this.state.password) {
                    localStorage.setItem("userLogged", content.identification);
                    localStorage.setItem("isLoggedIn", "true");
                    window.location.href = "/tasks";
                } else {
                    alert("User or password incorrect");
                }
            } catch (err) {
                alert("There is no users with that username");
                document.getElementById("loginForm").reset();
            }
        })();
    }

    handleRegisterPage() {
        window.location.href = "/register";
    }
}

export default withStyles(styles)(Login);