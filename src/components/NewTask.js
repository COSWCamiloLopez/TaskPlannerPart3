import React, {Component} from 'react';
import ArrowBack from '@material-ui/icons/ArrowBack';
import IconButton from "@material-ui/core/IconButton";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import 'typeface-roboto';
import MenuItem from "@material-ui/core/MenuItem";
import Create from '@material-ui/icons/Create';
import SimpleModal from "./SimpleModal";

const styles = theme => ({
    text: {
        width: '90%',
        textAlign: "left",
    },
    button: {
        width: '70%'
    }, leftIcon: {
        marginRight: theme.spacing.unit,
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
    }

    componentDidMount() {
        fetch('https://task-planner-api.herokuapp.com/user/userid/' + localStorage.getItem("userLogged"))
            .then(response => response.json())
            .then(data => {
                this.state.user = data;
                this.state.tasks = data.tasks;
            });
    }

    render() {

        {
            this.componentDidMount()
        }

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
                        variant="outlined"
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

        const modalButton = (
            <Create className={classes.leftIcon}/>
        );

        return (
            <>
                <SimpleModal
                    title="New task"
                    dialogContent="Create your new task"
                    form={form}
                    modalButton={modalButton}
                    color="inherit"
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

        const newTask = {
            owner: this.state.user.identification,
            description: this.state.description,
            responsible: this.state.responsible,
            status: this.state.status,
            dueDate: this.state.duedate
        };

        fetch("https://task-planner-api.herokuapp.com/task/newtask",
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Credentials": true
                },
                body: JSON.stringify(newTask)
            })
            .then(function (res) {
                return res.json();
            })
            .then(function (data) {
                alert(JSON.stringify(data))
            })

        setTimeout(
            function () {
                window.location.href = "/tasks";
            }, 1000);

    }
}

export default withStyles(styles)(NewTask);