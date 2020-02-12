import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(1),
        spacing: [2, 4, 6, 8, 10]
    },
    holder: {
        height: 600,
        overflow: "scroll",
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
        padding: 10,
        margin: 10
    },
    noteArea: {
        textAlign: "left",
    },
    link: {
        textDecoration: 'none'
    }
}))

export default function ViewNote(){
    const classes = useStyles();
        return (
            <div className={classes.root}>
                <Paper>
                    <p>Title</p>
                    <p>Content</p>
                </Paper>
            </div>
        )
}
