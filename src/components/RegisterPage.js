import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from "@material-ui/core/IconButton";
import ArrowBack from '@material-ui/icons/ArrowBack';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import SimpleModal from "./SimpleModal";
import axios from 'axios';

const styles = theme => ({
    backButton: {
        marginLeft: -12,
        marginRight: 20
    },
    text: {
        width: "90%"
    },
    button: {
        width: '70%'
    }
});

class RegisterPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            userName: '',
            password: ''
        }

        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSendRegister = this.handleSendRegister.bind(this);
    }

    render() {

        const {classes} = this.props;

        const fields = [
            {
                field: "First name",
                onchange: this.handleChangeFirstName,
                type: "text"
            }, {
                field: "Last name",
                onchange: this.handleChangeLastName,
                type: "text"
            }, {
                field: "Your email",
                onchange: this.handleChangeEmail,
                type: "text"
            }, {
                field: "Username",
                onchange: this.handleChangeUsername,
                type: "text"
            }, {
                field: "Password",
                onchange: this.handleChangePassword,
                type: "password"
            }
        ];

        const textFields = fields.map((x, i) => {
            return (
                <>
                    <TextField
                        required
                        key={i}
                        label={x.field}
                        onChange={x.onchange}
                        margin="normal"
                        className={classes.text}
                        variant="outlined"
                        type={x.type}
                        defaultValue={x.default}
                    />
                    <br/>
                </>
            );
        });

        const formButton = (
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                type="submit"
            >
                Send
            </Button>
        );

        const form = (
            <form className={classes.form} onSubmit={this.handleSendRegister}>
                {textFields}
                {formButton}
            </form>
        );

        return (
            <>
                <SimpleModal
                    title="Register"
                    dialogContent="Create your tasks account, it's free!"
                    form={form}
                    textButton="Sign Up"
                    variant="contained"
                    size="large"
                    color="primary"
                />
            </>
        );
    }

    handleBackPage() {
        window.location.href = "/"
    }

    handleChangeFirstName(e) {
        this.setState({firstName: e.target.value});
    }

    handleChangeLastName(e) {
        this.setState({lastName: e.target.value});
    }

    handleChangeEmail(e) {
        this.setState({email: e.target.value});
    }

    handleChangeUsername(e) {
        this.setState({userName: e.target.value});
    }

    handleChangePassword(e) {
        this.setState({password: e.target.value});
    }

    handleSendRegister(e) {

        e.preventDefault();

        axios.post('http://localhost:8080/user/new', {
            username: this.state.userName,
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName
        })
            .then((response) => {
                alert("User created");
                window.location.href = "/"
            })
            .catch((error) => {
                console.log(error);
                alert("Error creating the user")
            })

    }
}

export default withStyles(styles)(RegisterPage);