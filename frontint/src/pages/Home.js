import React, {} from 'react'
import Card from '../components/Card';
import Grid from '@material-ui/core/Grid';
import Note from '../components/Note';

const Home = props => {

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Card />
                </Grid>
                <Grid item xs={6}>
                    <Note note={props.notes} loading={props.load}/>
                </Grid>
            </Grid>
        </div>
    )
}
export default Home; 