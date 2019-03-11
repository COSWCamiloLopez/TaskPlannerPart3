import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
    dialog: {
        textAlign: "center"
    }, margin: {
        margin: theme.spacing.unit,
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
                    color={this.props.color}
                    className={classes.margin}
                    onClick={this.handleClickOpen}
                    variant={this.props.variant}
                    size={this.props.size}
                >
                    {this.props.modalButton}
                    {this.props.textButton}
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