import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import SimpleModal from "./SimpleModal";
import AccountCircle from '@material-ui/icons/AccountCircle';

const styles = {
    button: {
        width: '70%'
    },
    text: {
        width: '90%'
    }
}

class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userName: "",
            password: ""
        }

        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeUser = this.handleChangeUser.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChangeUser(e) {
        this.setState({userName: e.target.value})
    }

    handleChangePassword(e) {
        this.setState({password: e.target.value})
    }

    handleSubmit(e) {

        e.preventDefault();

        (async () => {
            const rawResponse = await fetch('https://task-planner-api.herokuapp.com/user/username/' + this.state.userName);

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

    render() {

        const {classes} = this.props;

        const fields = [
            {
                field: "Username",
                onChange: this.handleChangeUser,
                type: "text",
                id: "user",
                className: classes.text
            }, {
                field: "Password",
                onChange: this.handleChangePassword,
                type: "password",
                id: "password",
                className: classes.text
            }
        ]

        const textFields = fields.map((x, i) => {
            return (
                <TextField
                    required
                    id={x.id}
                    label={x.field}
                    margin="normal"
                    className={x.className}
                    variant="outlined"
                    onChange={x.onChange}
                    type={x.type}
                />
            );
        });

        const formButton = (
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                type="submit"
            >
                Sign In
            </Button>
        );

        const form = (
            <form
                id="loginForm"
                className={classes.form}
                onSubmit={this.handleSubmit}
            >
                {textFields}
                {formButton}
            </form>
        );

        return (
            <>
                <SimpleModal
                    title="Sign In"
                    dialogContent="Login to your tasks account"
                    form={form}
                    textButton="Sign In"
                    variant="contained"
                    size="large"
                    color="primary"
                />
            </>
        );
    }
}

export default withStyles(styles)(LoginForm);