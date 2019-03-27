import React, {Component} from 'react';
import {Avatar, Typography, withStyles} from '@material-ui/core/es';
import Paper from "@material-ui/core/Paper";
import AccountCircle from "@material-ui/icons/AccountCircleOutlined";

const styles = {
    paper: {
        width: "100%",
        maxWidth: 320,
        margin: "auto",
        borderRadius: 0,
        paddingTop: 20,
        marginTop: 20
    }, icon: {
        fontSize: 50,
    }
}

class PaperComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {classes} = this.props;

        return (
            <>
                <Paper className={classes.paper}>
                    <AccountCircle color="primary" className={classes.icon}/>
                    <Typography component="h1" variant="h5">
                        {this.props.title}
                    </Typography>
                    {this.props.form}
                    {this.props.createAccount}
                </Paper>
            </>
        );
    }

}

export default withStyles(styles)(PaperComponent);