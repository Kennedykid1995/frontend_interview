import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    },
}));


export default function Card() {
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
        <Button variant="contained" color="primary">View Note</Button>
        </Paper>
    )
}
