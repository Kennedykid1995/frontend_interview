import React, { Component } from 'react'
import { makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme  => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign:'center',
        color: theme.palette.text.secondary
    },
}));


export default function Card(){
    const classes = useStyles(); 
        return (
            <div className={classes.root}>
              <Paper className={classes.paper}>xs=12</Paper>
            </div>
        )
    }
