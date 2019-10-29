import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../../components/LayoutPreLogin';
import ImageNotDraggable from '../../components/ImageNotDraggable';
import { Grid } from '@material-ui/core';
import './styles.scss';

const useStyles = makeStyles(theme => ({
    loginForm: {
        height: "503px",
        width: "503px",
        backgroundColor: '#282F42'
    },
    image: {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "25px",
        width: "116px",
        height: "116px"
    },
    element: {
        maxHeight: "60px"
    }
}));

export default function SpacingGrid() {
    // const [setSpacing] = React.useState(2);
    const classes = useStyles();

    return (
        <Layout>
            <Grid
            container
            spacing={5}
            direction="column"
            alignItems="center" 
            className={classes.loginForm}>
                <Grid  item>
                    <ImageNotDraggable
                        image={'PERSON'}
                        className={'card-math-img' + ' ' + classes.image} />
                </Grid>
                <Grid className={classes.element} item>
                    <h1 className="title">Real Soccer</h1>
                </Grid>
                <Grid className={classes.element} item>
                    <input className="form-control" type="text"></input>
                </Grid>
                <Grid className={classes.element} item>
                    <input className="form-control" type="text"></input>
                </Grid>
            </Grid>
        </Layout>
    );
}