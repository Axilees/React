import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        marginTop: "24px",
        margin: 'auto',
        maxWidth: 500,
    },
    main: {
        width: "100%",
        alignItems:"center",
    }
});

function PaperSheet(props) {
    const { classes } = props;

    return (
        <div className={classes.main}>
            <Paper className={classes.root} elevation={1} >
                <Typography variant="h5" component="h3">
                    {props.title}
                </Typography>
                <Typography component="p">
                    {props.text}
                </Typography>
            </Paper>
        </div>
    );
}

PaperSheet.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);
