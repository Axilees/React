import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import toRenderProps from 'recompose/toRenderProps';
import withState from 'recompose/withState';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};
const WithState = toRenderProps(withState('anchorEl', 'updateAnchorEl', null));

function ButtonAppBar(props) {
    const {classes} = props;
    return (
        <WithState>
            {({anchorEl, updateAnchorEl}) => {
                const open = Boolean(anchorEl);
                const handleClose = () => {
                    updateAnchorEl(null);
                };
                return (
                    <div className={classes.root}>
                        <AppBar position="static">
                            <Toolbar>
                                <IconButton className={classes.menuButton} color="inherit" aria-label="Menu"
                                            aria-owns={open ? 'render-props-menu' : undefined}
                                            aria-haspopup="true"
                                            onClick={event => {
                                                updateAnchorEl(event.currentTarget);
                                            }}>
                                    <MenuIcon/>
                                </IconButton>
                                <Menu id="render-props-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
                                    <MenuItem onClick={()=>(props.handlePageOpen("users"))}>User Page</MenuItem>
                                    <MenuItem onClick={()=>(props.handlePageOpen("todos"))}>ToDo Page</MenuItem>
                                    <MenuItem onClick={()=>(props.handlePageOpen(""))}>Main Page</MenuItem>
                                </Menu>
                                <Typography variant="h6" color="inherit" className={classes.grow}>
                                    Please Choose
                                </Typography>
                            </Toolbar>
                        </AppBar>
                    </div>
                );
            }}
        </WithState>
    );
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
