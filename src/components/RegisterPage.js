import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from "@material-ui/core/IconButton";
import ArrowBack from '@material-ui/icons/ArrowBack';
import AppBarPage from "./AppBar";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import SimpleModal from "./SimpleModal";
import Mood from '@material-ui/icons/Mood';

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
            users: [],
            fullname: '',
            email: '',
            username: '',
            id: '',
            phone: 0,
            password: ''
        }

        this.handleChangeFullName = this.handleChangeFullName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangeId = this.handleChangeId.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeOccupation = this.handleChangeOccupation.bind(this);
        this.handleSendRegister = this.handleSendRegister.bind(this);
    }

    render() {

        const {classes} = this.props;

        const iconButton = (
            <IconButton
                className={classes.backButton}
                onClick={this.handleBackPage}
            >
                <ArrowBack/>
            </IconButton>
        );

        const fields = [
            {
                field: "Full name",
                onchange: this.handleChangeFullName,
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
                field: "Identification",
                onchange: this.handleChangeId,
                type: "text"
            }, {
                field: "Phone number",
                onchange: this.handleChangePhone,
                type: "number"
            }, {
                field: "Occupation",
                onchange: this.handleChangeOccupation,
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

    handleChangeFullName(e) {
        this.setState({fullname: e.target.value});
    }

    handleChangeEmail(e) {
        this.setState({email: e.target.value});
    }

    handleChangeUsername(e) {
        this.setState({username: e.target.value});
    }

    handleChangeId(e) {
        this.setState({id: e.target.value});
    }

    handleChangePhone(e) {
        this.setState({phone: e.target.value});
    }

    handleChangePassword(e) {
        this.setState({password: e.target.value});
    }

    handleChangeOccupation(e) {
        this.setState({occupation: e.target.value});
    }

    handleSendRegister(e) {

        e.preventDefault();

        const newUser = {
            identification: this.state.id,
            fullName: this.state.fullname,
            email: this.state.email,
            userName: this.state.username,
            phoneNumber: this.state.phone,
            occupation: this.state.occupation,
            password: this.state.password
        };

        fetch("https://task-planner-api.herokuapp.com/user/new",
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Credentials": true
                },
                body: JSON.stringify(newUser)
            })
            .then(function (res) {
                return res.json();
            })
            .then(function (data) {
                alert(JSON.stringify(data))
            })

        setTimeout(
            function () {
                window.location.href = "/";
            }, 1000);

    }
}

export default withStyles(styles)(RegisterPage);