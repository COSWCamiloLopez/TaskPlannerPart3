import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
        textAlign: "left"
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
}

class AppBarPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {classes} = this.props;

        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        {this.props.button}
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            Task Planner
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(AppBarPage);