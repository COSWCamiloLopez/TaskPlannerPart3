import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Tune from '@material-ui/icons/Tune';
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
    buttonFilter: {
        marginRight: 20
    }, leftIcon: {
        marginRight: theme.spacing.unit,
    }, dialog: {
        textAlign: "center"
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

        return (
            <div>
                <Button
                    color="inherit"
                    className={classes.buttonFilter}
                    onClick={this.handleClickOpen}
                >
                    <Tune className={classes.leftIcon}/>
                    {this.props.title}
                </Button>
                <Dialog
                    fullWidth={true}
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                    className={classes.dialog}
                >
                    <DialogTitle id="form-dialog-title">
                        {this.props.title}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {this.props.dialogContent}
                        </DialogContentText>
                        {this.props.form}
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(FormDialog);