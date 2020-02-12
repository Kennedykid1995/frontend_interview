import React, { useState, useEffect  } from 'react'
import axios from 'axios';
import { Link, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Post from '../pages/Post'; 

const url = "http://localhost:4000/notes"


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
}));

const Note = props => {
    const classes = useStyles();
    return (
        <div className={classes.holder}>
        {props.note.map(({id, title, content}) => (
            <div className={classes.root}>
            <Paper className={classes.paper}>
                <p className={classes.noteArea}>{title}</p>
                <p className={classes.noteArea}>{content}</p>
                <Link to={`/note/${id}`} className={classes.link}>
                    <Button className={classes.button}>View Note</Button>
                </Link>
            </Paper>
        </div>
        ))}
        </div>
    )
}
export default Note; 
