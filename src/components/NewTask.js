import React, {Component} from 'react';
import ArrowBack from '@material-ui/icons/ArrowBack';
import IconButton from "@material-ui/core/IconButton";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import 'typeface-roboto';
import MenuItem from "@material-ui/core/MenuItem";
import axios from 'axios';
import PaperComponent from "./PaperComponent";
import AppBarPage from "./AppBar";

const styles = theme => ({
    text: {
        width: '90%'
    },
    button: {
        width: '80%',
        marginBottom: 20,
        marginTop: 20,
    }, leftIcon: {
        marginRight: theme.spacing.unit,
    }, backButton: {
        marginLeft: -12,
        marginRight: 20
    }
});

class NewTask extends Component {

    constructor(props) {
        super(props);
        this.state = {
            description: '',
            responsible: '',
            status: '',
            duedate: '',
            user: '',
            tasks: []
        };

        this.handleChangeDuedate = this.handleChangeDuedate.bind(this);
        this.handleChangeResponsible = this.handleChangeResponsible.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleChangeStatus = this.handleChangeStatus.bind(this);
        this.handleSendTask = this.handleSendTask.bind(this);

        this.instance = axios.create({
            baseURL: 'http://task-planner-api.herokuapp.com/api/',
            timeout: 1000,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem("token")}
        });
    }

    componentDidMount() {

        let self = this;

        this.instance.get('http://task-planner-api.herokuapp.com/api/user/username/' + localStorage.getItem("userLogged"))
            .then(function (response) {
                self.setState({user: response.data})
            })
            .catch(function (error) {
                console.log(error)
            })
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
                field: "Description",
                onchange: this.handleChangeDescription,
                type: "text"

            }, {
                field: "Responsible",
                onchange: this.handleChangeResponsible,
                type: "text"
            }, {
                field: "Duedate",
                onchange: this.handleChangeDuedate,
                type: "date",
                default: "2019-01-01"
            }];

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
                        type={x.type}
                        defaultValue={x.default}
                    />
                    <br/>
                </>
            );
        });

        const options = ["In progress", "Ready", "Completed"]

        const menuItems = options.map((x) => {
            return (
                <MenuItem value={x}>
                    {x}
                </MenuItem>
            );
        });

        const drag = (
            <TextField
                select
                required
                margin="normal"
                label="Status"
                className={classes.text}
                value={this.state.status}
                onChange={this.handleChangeStatus}
                SelectProps={{
                    MenuProps: {
                        className: classes.menu,
                    },
                }}
                variant="outlined"
            >
                {menuItems}
            </TextField>
        );

        const button = (
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
            <form className={classes.form} onSubmit={this.handleSendTask}>
                {textFields}
                {drag}
                {button}
            </form>
        );

        return (
            <>
                <AppBarPage button={iconButton}/>
                <PaperComponent
                    form={form}
                    title="New task"
                />
            </>
        );
    }

    handleBackPage() {
        window.location.href = '/tasks';
    }

    handleChangeDescription(e) {
        this.setState({description: e.target.value});
    }

    handleChangeResponsible(e) {
        this.setState({responsible: e.target.value});
    }

    handleChangeStatus(e) {
        this.setState({status: e.target.value});
    }

    handleChangeDuedate(e) {
        this.setState({duedate: e.target.value});
    }

    handleSendTask(e) {

        e.preventDefault();

        const instance = axios.create({
            baseURL: 'http://task-planner-api.herokuapp.com/api/',
            timeout: 1000,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem("token")}
        });

        instance.post("http://task-planner-api.herokuapp.com/api/task/newtask", {
            owner: this.state.user.id,
            description: this.state.description,
            responsible: this.state.responsible,
            status: this.state.status,
            dueDate: this.state.duedate
        })
            .then(function (response) {
                console.log(response)
                window.location.href = "/tasks"
            })
            .catch(function (error) {
                console.log("Error creating a new task", error)
            })

        instance.get('http://task-planner-api.herokuapp.com/api/task/all')
            .then((response) => {
                console.log(response.data)
            })
    }
}

export default withStyles(styles)(NewTask);