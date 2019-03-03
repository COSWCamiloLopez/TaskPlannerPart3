import React, {Component} from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
    card: {}
});

class Task extends Component {

    render() {

        const {classes} = this.props;

        return (
            <div>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            {this.props.tasks.responsible.name}
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {this.props.tasks.status}
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {this.props.tasks.description}
                        </Typography>
                    </CardContent>
                </Card>
                <br/>
            </div>
        );
    }
}

export default withStyles(styles)(Task);