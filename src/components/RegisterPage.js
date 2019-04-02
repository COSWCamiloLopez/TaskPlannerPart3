import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from "@material-ui/core/IconButton";
import ArrowBack from '@material-ui/icons/ArrowBack';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import axios from 'axios';
import AppBar from "./AppBar";
import PaperComponent from "./PaperComponent";

const styles = theme => ({
    backButton: {
        marginLeft: -12,
        marginRight: 20
    },
    text: {
        width: "90%"
    },
    button: {
        width: '80%',
        marginBottom: 20,
        marginTop: 20
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
            password: '',
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
                onChange: this.handleChangeFirstName,
                type: "text"
            }, {
                field: "Last name",
                onChange: this.handleChangeLastName,
                type: "text"
            }, {
                field: "Your email",
                onChange: this.handleChangeEmail,
                type: "text"
            }, {
                field: "Username",
                onChange: this.handleChangeUsername,
                type: "text"
            }, {
                field: "Password",
                onChange: this.handleChangePassword,
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
                        onChange={x.onChange}
                        margin="normal"
                        className={classes.text}
                        type={x.type}
                        defaultValue={x.default}
                    />
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

        const backButton = (
            <IconButton
                className={classes.backButton}
                onClick={this.handleBackPage}
            >
                <ArrowBack/>
            </IconButton>
        );

        return (
            <>
                <AppBar button={backButton}/>
                <PaperComponent
                    form={form}
                    title="Register"
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

        axios.post('http://localhost:8080/token/new', {
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