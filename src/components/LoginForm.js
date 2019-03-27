import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import axios from "axios";

const styles = {
    button: {
        width: '80%',
        marginTop: 20,
        marginBottom: 20
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

        var self = this;

        e.preventDefault();

        axios.post('http://task-planner-api.herokuapp.com/token/login', {
            username: this.state.userName,
            password: this.state.password
        })
            .then(function (response) {
                localStorage.setItem("token", response.data.accessToken);
                localStorage.setItem("isLoggedIn", true);
                localStorage.setItem("userLogged", self.state.userName);
                window.location.href = "/tasks";
            })
            .catch(function (error) {
                console.log(error)
                alert("User or password incorrect");
            });
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
                {form}
            </>
        );
    }
}

export default withStyles(styles)(LoginForm);