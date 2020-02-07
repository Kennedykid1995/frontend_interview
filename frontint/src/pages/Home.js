import React, { Component } from 'react'
import Card from '../components/Card';
import Grid from '@material-ui/core/Grid';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Card />
                    </Grid>
                </Grid>
            </div>
        )
    }
}
