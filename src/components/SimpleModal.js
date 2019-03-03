import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Tune from '@material-ui/icons/Tune';
import withStyles from "@material-ui/core/styles/withStyles";
import MenuItem from "@material-ui/core/MenuItem";

const styles = theme => ({
    buttonFilter: {
        marginRight: 20
    }, leftIcon: {
        marginRight: theme.spacing.unit,
    }, dialog: {
        textAlign: "center"
    }, text: {
        width: "70%"
    }, button: {
        width: "70%"
    }
});

class FormDialog extends React.Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

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

        const textFields = fields.map((x) => {
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

        const options = ["In progress", "Ready", "Completed"]

        const menuItems = options.map((x) => {
            return (
                <MenuItem value={x}>
                    {x}
                </MenuItem>
            );
        });

        return (
            <div>
                <Button
                    color="inherit"
                    className={classes.buttonFilter}
                    onClick={this.handleClickOpen}
                >
                    <Tune className={classes.leftIcon}/>
                    Filter
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                    className={classes.dialog}
                >
                    <DialogTitle id="form-dialog-title">Filter</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Here you can filter your tasks to show them by Date, Responsible or Status
                        </DialogContentText>
                        {textFields}
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
                        <br/>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            type="submit"
                        >
                            Filter
                        </Button>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(FormDialog);