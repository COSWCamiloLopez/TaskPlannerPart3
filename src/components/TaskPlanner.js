import React, {Component} from 'react';
import TaskPlannerDrawer from './TaskPlannerDrawer';

//const styles = theme => ({});

class TaskPlanner extends Component {

    render() {

        //const {classes} = this.props;

        return (
            <div>
                <TaskPlannerDrawer/>
            </div>
        );
    }
}

export default TaskPlanner;