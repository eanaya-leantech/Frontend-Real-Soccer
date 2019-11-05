import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import './styles.scss';

const useStyles = makeStyles(theme => ({
    root: {
        // flexGrow: 1,
        width: "100%",
        height: "100vh",
        backgroundColor: "#212737"
    }
}));


const Layout = ({ children }) => {    
    const classes = useStyles();

    return (
        <Grid container
            direction="row"
            justify="center"
            alignItems="center" 
            className={classes.root} 
            >
                {children}            
        </Grid>
    )
};

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;
