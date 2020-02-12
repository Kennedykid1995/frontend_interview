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

export default function Note() {
    const classes = useStyles();

    const [data, setData] = useState([]);
    useEffect(async () => {
        const fetchData = async () => {
            const notes = await axios(url);
            setData(notes.data);
        }
        fetchData();
    }, [])
    console.log(data)

    return (
        <div className={classes.holder}>
        {data.map(note => (
            <div className={classes.root}>
            <Paper className={classes.paper}>
                <p className={classes.noteArea}>{note.title}</p>
                <p className={classes.noteArea}>{note.content}</p>
                <Link to={`/note/${note.id}`} className={classes.link}>
                    <Button className={classes.button}>View Note</Button>
                </Link>
            </Paper>
        </div>
        ))}
        </div>
    )
}
