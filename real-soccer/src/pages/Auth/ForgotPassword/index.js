import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Box } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { IconButton } from "@material-ui/core";
import clsx from 'clsx';
import Layout from '../../../components/LayoutPreLogin';
import ImageNotDraggable from '../../../components/ImageNotDraggable';
import Text from '../../../components/Text/Text';
import './styles.scss';

export default () => { 
    return (
        <Layout>
            <Grid
                container
                spacing={1}
                direction="column"
                alignItems="center"
                className={`loginForm shadow`}>
                <Grid item>
                    <ImageNotDraggable
                        image={'LOGO'}
                        width={'116px'} 
                        className={'card-math-img image'} />
                </Grid>
                <Grid className="element" textAlign="center" item>
                    <Text>
                        <Box textAlign="center" my={1}>
                            <h1>Reset your password</h1>
                            <span>Enter your email address and we will send you a link to reset your password.</span>
                        </Box>
                    </Text>
                </Grid>
                <Grid className="element" item>
                    <input className="input" type="text" placeholder="Enter your email address"></input>
                </Grid>
                <Grid className="element" item>
                    <Box my={3}>
                        <Button size="large" className="button shadow" boxShadow={3}>
                            <Text fontSize="1.2em">
                                Send reset email
                            </Text>
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Layout>
    )
};