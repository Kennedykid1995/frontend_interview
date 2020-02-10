import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(1),
        spacing: [2, 4, 6, 8, 10]
    },
    paper: {
        padding: theme.spacing(2),
        boxShadow: 'none',
        backgroundColor: '#f200ff',
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
    titleBox: {
        id: "standard-basic",
        label: "Standard",
        margin: 20
    },
    textFeild: {
        id: "outlined-multiline-static",
        label: "Multiline",
        rows: "4",
        variant: "filled",
        margin: 20
    }
}));


export default function Card() {
    const classes = useStyles();
    return (
        <form className={classes.root}>
            <Paper className={classes.paper}>
                <TextField className={classes.titleBox} />
                <TextField multiline />
                <Button className={classes.button}>Add Note</Button>
            </Paper>
        </form>

    )
}
