import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/es/AppBar";
import classNames from 'classnames';
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import userIcon from "../images/user.png";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExitIcon from "../images/baseline-exit_to_app-24px.svg";
import Task from "./Task";
import Person from '@material-ui/icons/Person';
import ModalFilter from "./Filter";
import axios from "axios";
import {Fab} from "@material-ui/core";
import Add from "@material-ui/icons/Add";


const drawerWidth = 350;

const styles = theme => ({
    card: {
        minWidth: 275,
    },
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    userIcon: {
        width: '30%'
    },
    grow: {
        flexGrow: 1,
    },
    button: {
        marginRight: 20
    }, leftIcon: {
        marginRight: theme.spacing.unit,
    },
    toolbarTitle: {
        flex: 1,
        textAlign: "left"
    }, fab: {
        position: "fixed",
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2,
    }
});

class TaskPlannerDrawer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            tasks: [],
            user: {}
        };

        this.handleChangeIsLoggedIn = this.handleChangeIsLoggedIn.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.updateTasks = this.updateTasks.bind(this);

        this.instance = axios.create({
            baseURL: 'http://localhost:8080/api/',
            timeout: 1000,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem("token")}
        });
    };

    componentDidMount() {
        this.instance.get('http://localhost:8080/api/user/username/' + localStorage.getItem("userLogged"))
            .then((response) => {
                this.setState({user: response.data})
                this.updateTasks();
            });
    }

    updateTasks() {
        this.instance.get('http://localhost:8080/api/task/user/' + this.state.user.id)
            .then((response) => {
                this.setState({tasks: response.data})
            });
    }

    render() {

        let user = this.state.user;

        const {classes} = this.props;

        const {open} = this.state;

        let tasks;

        try {
            tasks = this.state.tasks.map((x, i) => {
                return (
                    <Task
                        key={i}
                        tasks={x}
                    />
                );
            });
        } catch (err) {
            tasks = []
        }

        return (
            <div className={classes.root}>
                <AppBar
                    position="fixed"
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar disableGutters={!open}>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerOpen}
                            className={classNames(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                            Task planner
                        </Typography>
                        <ModalFilter/>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={this.handleDrawerClose}>
                            <ChevronLeftIcon/>
                        </IconButton>
                    </div>
                    <Divider/>
                    <div className={classes.userData}>
                        <Card className={classes.card}>
                            <CardContent>
                                <img src={userIcon} className={classes.userIcon} alt=""/>
                                <Typography variant="subtitle2" gutterBottom>
                                    <b>{user.firstName + " " + user.lastName}</b>
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    <b>Email: </b>{user.email}
                                </Typography>
                            </CardContent>
                        </Card>
                        <List>
                            <ListItem
                                button
                                onClick={this.handleProfilePage}
                            >
                                <ListItemIcon>
                                    <Person/>
                                </ListItemIcon>
                                <ListItemText primary="Profile"/>
                            </ListItem>
                            <ListItem
                                button
                                onClick={this.handleChangeIsLoggedIn}
                            >
                                <ListItemIcon>
                                    <img src={ExitIcon} alt=""/>
                                </ListItemIcon>
                                <ListItemText primary="Logout"/>
                            </ListItem>
                        </List>
                    </div>
                </Drawer>
                <main
                    className={classNames(classes.content, {
                        [classes.contentShift]: open,
                    })}
                >
                    <div className={classes.drawerHeader}/>
                    {tasks}
                    <Fab
                        className={classes.fab}
                        color="primary"
                    >
                        <Add onClick={this.handleNewTask}/>
                    </Fab>
                </main>
            </div>
        );
    }

    handleDrawerOpen = () => {
        this.setState({open: true});
    };

    handleDrawerClose = () => {
        this.setState({open: false});
    };

    handleChangeIsLoggedIn() {
        localStorage.setItem("isLoggedIn", "false");
        window.location.href = '/';
    }

    handleProfilePage() {
        window.location.href = "/profile"
    }

    handleNewTask() {
        window.location.href = "/newtask"
    }
}

export default withStyles(styles)(TaskPlannerDrawer);