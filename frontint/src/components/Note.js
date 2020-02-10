import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(1),
        spacing: [2, 4, 6, 8, 10]
    },
    paper: {
        padding: theme.spacing(2),
        boxShadow: 'none',
        backgroundColor: '#00ffbb',
        textAlign: 'center',
        color: 'black',
        display: "flex",
        flexDirection: "column",
    },
    button: {
        variant: "contained",
        backgroundColor: "white",
        boxShadow: "none",
        margin: 20
    },
    noteArea: {
        textAlign: "left",
    }
}));

export default function Note() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
            <p className={classes.noteArea}>fbjdncks d cj cied chjfsdkfj kvdnkvdksn kcsdnfvdjndkn</p>
                <Button className={classes.button}>View Note</Button>
            </Paper>
        </div>
    )
}
