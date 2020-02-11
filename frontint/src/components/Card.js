import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const url = "http://localhost:4000/notes";

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
        margin: 20,

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
    const [newNote, setNewNote] = useState(
        {title: '', content: ''}
    )
    const handleChange = (event) => {
        setNewNote({...newNote, [event.target.name]: event.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(url, newNote)
        .then(function(response){
            console.log(response)
        })
        .catch(function(error){
            console.log(error)
        })
    }
    return (
        <form onSubmit={handleSubmit} className={classes.root}>
            <Paper className={classes.paper}>
                <TextField 
                className={classes.titleBox}
                name='title'
                type='text'
                value={newNote.title}
                onChange={handleChange}
                required
                />
                <TextField
                 multiline
                 name='content'
                 type='text'
                 value={newNote.content}
                 onChange={handleChange}
                 required
                 />
                <Button type='submit' className={classes.button}>Add Note</Button>
            </Paper>
        </form>

    )
}
