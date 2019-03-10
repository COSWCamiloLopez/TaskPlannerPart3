import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from '@material-ui/core/TextField';
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import SimpleModal from "./SimpleModal";

const styles = {
    text: {
        width: "90%"
    }, button: {
        width: "70%"
    }
}

class Filter extends Component {

    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {

        const {classes} = this.props;

        const fields = [
            {
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
                Filter
            </Button>
        )

        const form = (
            <form>
                {textFields}
                {drag}
                {button}
            </form>
        );

        return (
            <>
                <SimpleModal
                    title="Filter"
                    form={form}
                    dialogContent="Here you can filter your tasks to show them by Date, Responsible or Status"
                />
            </>
        );
    }

}

export default withStyles(styles)(Filter);