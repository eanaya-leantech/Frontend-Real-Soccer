import React from 'react';
import {Grid, Box} from '@material-ui/core'
import './styles.scss'

const FormTeam = () => (
    <Grid className="team">
        <Box className="logo"/>
        <form className='form'>
            <input type="text" placeholder="New team"/>
            <textarea name="" placeholder="Description"/>
        </form>

    </Grid>
);

export default FormTeam;
