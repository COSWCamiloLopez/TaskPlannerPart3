import React, {Component} from 'react';
import AppBarPage from "./AppBar";
import ArrowBack from '@material-ui/icons/ArrowBack';
import IconButton from "@material-ui/core/IconButton";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import 'typeface-roboto';
import MenuItem from "@material-ui/core/MenuItem";
import SimpleModal from "./SimpleModal";

const styles = theme => ({
    text: {
        width: '90%',
        textAlign: "left",
    },
    button: {
        width: '70%'
    }
});

class NewTask extends Component {

    constructor(props) {
        super(props);
        this.state = {
            description: '',
            responsible: '',
            status: '',
            duedate: ''
        };

        this.handleChangeDuedate = this.handleChangeDuedate.bind(this);
        this.handleChangeResponsible = this.handleChangeResponsible.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleChangeStatus = this.handleChangeStatus.bind(this);
        this.handleSendTask = this.handleSendTask.bind(this);
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

        return (
            <>
                <SimpleModal
                    title="New task"
                    dialogContent="Create your new task"
                    form={form}
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

        const taskItems = {
            description: this.state.description,
            responsible: {
                name: this.state.responsible,
                email: ''
            },
            status: this.state.status,
            duedate: this.state.duedate
        };

        if (localStorage.getItem("tasks") === null) {
            const tasks = {
                list: []
            }
            localStorage.setItem("tasks", JSON.stringify(tasks))
        }

        const json = JSON.parse(localStorage.getItem("tasks"));

        json.list.push(taskItems);

        localStorage.setItem("tasks", JSON.stringify(json));

        window.location.href = "/tasks";

    }
}

export default withStyles(styles)(NewTask);