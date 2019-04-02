import React, {Component} from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
    card: {
        width: "100%",
        marginBottom: "1%",
        float: "left",
        borderRadius: 0,
    }
});

class Task extends Component {

    render() {

        const {classes} = this.props;

        return (
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h5" gutterBottom>
                        <b>Responsible:</b> {this.props.tasks.responsible}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        <b>Description:</b> {this.props.tasks.description}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        <b>Date:</b> {this.props.tasks.dueDate}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        <b>Status:</b> {this.props.tasks.status}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        <b>File:</b> <a
                        href={"http://localhost:8080/file/name/" + this.props.tasks.file}>{this.props.tasks.file}</a>
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles)(Task);