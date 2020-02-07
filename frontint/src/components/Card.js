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
        boxShadow: 'none', 
        backgroundColor:'#f200ff',
        textAlign: 'center',
        color: 'black'

    },
    button:{
        variant: "contained",
        backgroundColor: "white",
        boxShadow: "none"
    }
}));


export default function Card() {
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <Button className={classes.button}>Add Note</Button>
        </Paper>
    )
}
