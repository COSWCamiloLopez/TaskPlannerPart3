import React, {Component} from 'react';
import IconButton from "@material-ui/core/IconButton";
import ArrowBack from '@material-ui/icons/ArrowBack';
import AppBarPage from "./AppBar";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography"
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

const styles = theme => ({
    backButton: {
        marginLeft: -12,
        marginRight: 20
    },
    text: {
        width: "30%"
    },
    button: {
        width: "30%"
    }
});

class UserProfile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fullname: '',
            email: '',
            phone: 0,
            occupation: '',
            password: ''
        }

        this.handleChangeFullName = this.handleChangeFullName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleChangeOccupation = this.handleChangeOccupation.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeProfile = this.handleChangeProfile.bind(this);
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
                field: "New full name",
                onchange: this.handleChangeFullName,
                type: "text"
            },
            {
                field: "New email",
                onchange: this.handleChangeEmail,
                type: "text"
            },
            {
                field: "New phone number",
                onchange: this.handleChangePhone,
                type: "number"
            },
            {
                field: "New occupation",
                onchange: this.handleChangeOccupation,
                type: "text"
            },
            {
                field: "New password",
                onchange: this.handleChangePassword,
                type: "password"
            }
        ];

        const textfields = fields.map((x) => {
            return (
                <>
                    <TextField
                        required
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

        return (
            <>
                <AppBarPage button={iconButton}/>
                <br/>
                <br/>
                <Typography variant="h2" gutterBottom>
                    Update your profile
                </Typography>
                <form className={classes.form} onSubmit={this.handleChangeProfile}>
                    {textfields}
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        type="submit"
                    >
                        Update profile
                    </Button>
                </form>

            </>
        );
    };

    handleBackPage() {
        window.location.href = "/tasks"
    }

    handleChangeFullName(e) {
        this.setState({fullname: e.target.value});
    }

    handleChangeEmail(e) {
        this.setState({email: e.target.value});
    }

    handleChangePhone(e) {
        this.setState({phone: e.target.value});
    }

    handleChangeOccupation(e) {
        this.setState({occupation: e.target.value});
    }

    handleChangePassword(e) {
        this.setState({password: e.target.value});
    }

    handleChangeProfile(e) {

        e.preventDefault();

        let users = JSON.parse(localStorage.getItem("users"));

        for (let x in users.list) {
            if (localStorage.getItem("userLogged") === users.list[x].username) {
                users.list[x].fullname = this.state.fullname;
                users.list[x].email = this.state.email;
                users.list[x].phone = this.state.phone;
                users.list[x].occupation = this.state.occupation;
                users.list[x].password = this.state.password;
            }
        }

        localStorage.setItem("users", JSON.stringify(users));

        alert("Profile updated");

        window.location.href = "/tasks"

    }
}

export default withStyles(styles)(UserProfile);