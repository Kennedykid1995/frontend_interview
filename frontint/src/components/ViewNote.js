import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { useEdit } from "../Hooks/edit";

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

const ViewNote = props => {
    const classes = useStyles();
    const data = props.note;
    const [storage, setStorage] = useState(data);
    const url = window.location.pathname;
    const identification = url.substring(url.lastIndexOf("/") + 1);
    const [idData] = useEdit(`http://localhost:4000/notes/${identification}`);
    console.log(idData, identification);
    const deleteNote = e => {
        e.preventDefault();
        axios
            .delete(`http://localhost:4000/notes/${identification}`)
            .then(res => {
                console.log(res.data);
                axios.get("http://localhost:4000/notes").then(response => {
                    setStorage(...storage, response.data);
                    console.log(response.data);
                });
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <>
            {idData.map(({ id, title, content }) => (
                <div className={classes.root}>
                    <Paper>
                        <p>{title}</p>
                        <p>{content}</p>
                        <Link to="/home">
                            <button onClick={deleteNote}>Delete</button>
                        </Link>
                    </Paper>
                </div>
            ))}
        </>
    )
}
export default ViewNote; 
