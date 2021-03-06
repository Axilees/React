import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Spinner from './Spinner';
import indigo from '@material-ui/core/colors/indigo';
import myTheme from './theme';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

const CustomTableCell = withStyles(theme => ({

    head: {
        backgroundColor: myTheme.palette.primary,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const styles = theme => ({
    root: {
        width: '80%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
        margin: 'auto',
        maxWidth: 1000,
    },
    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
});

function printRow(row) {
    const entries = Object.entries(row);
    const returnRows = [];
    for (const [key, value] of entries) {
        if (key !== 'id')
            returnRows.push(<CustomTableCell align="center" key={key + value}>{value}</CustomTableCell>);
    }
    return returnRows;
}


function CustomizedTable(props) {
    const {classes} = props;
    let table =
        <MuiThemeProvider theme={myTheme}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow color="inherit">
                        {
                            props.headers.map(header => (
                                <CustomTableCell align="center" key={header}>{header}</CustomTableCell>
                            ))
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.rows.map(row => (
                        <TableRow className={classes.row} key={row.id}>
                            {printRow(row)}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>;
        </MuiThemeProvider>
    if (props.loading) {
        table = <Spinner/>
    }
    return (
        <Paper className={classes.root}>
            {table}
        </Paper>
    );
}

CustomizedTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);
