import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Box } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import clsx from 'clsx';
import Layout from '../../../components/LayoutPreLogin';
import ImageNotDraggable from '../../../components/ImageNotDraggable';
import Text from '../../../components/Text/Text';
import './styles.scss';
import { FETCH } from '../../../API/fetch'

const useStyles = makeStyles({
    root: {
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    icon: {
        borderRadius: 1,
        width: 16,
        height: 16,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: '#f5f8fa',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
            outline: '2px auto rgba(19,124,189,.6)',
            outlineOffset: 2,
        },
        'input:hover ~ &': {
            backgroundColor: '#ebf1f5',
        },
        'input:disabled ~ &': {
            boxShadow: 'none',
            background: 'rgba(206,217,224,.5)',
        },
    },
    checkedIcon: {
        backgroundColor: 'red',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
            display: 'block',
            width: 16,
            height: 16,
            backgroundImage:
                "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
                " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
                "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
            content: '""',
        },
        'input:hover ~ &': {
            backgroundColor: '#191e2b',
        },
    },
});

export default function SpacingGrid() {
    // const [setSpacing] = React.useState(2);
    const [state, setState] = React.useState({
        checkedB: true,
        username: '',
        password: '',
        temporalToken: ''
    });

    const changeHandler = (e) => {
        const name = e.target.name
        const value = e.target.value
        setState({ ...state, [name]: value})
    }

    const submitHandler = (e) => {
        e.preventDefault()

        const authData = {
            username: state.username,
            password: state.password
        }

        FETCH('post', '', authData, 'http://localhost:3001/api/auth')
        .then(res => {
            setState({ ...state, temporalToken: res.data.token})
        })
        .catch(err => console.log(err))
        
    }

    const classes = useStyles();
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
                        image={'PERSON'}
                        className={'card-math-img image'} />
                </Grid>
                <Grid className="element" textAlign="center" item>
                    <Text>
                        <Box textAlign="center" my={2}>
                            <h1>Real Soccer</h1>
                        </Box>
                    </Text>
                </Grid>
                <Grid className="element" item>
                    <input className="input" type="text" name="username" placeholder="Username" onChange={changeHandler}></input>
                </Grid>
                <Grid className="element" item>
                    <input className="input" type="password" name="password" placeholder="Password" onChange={changeHandler}></input>
                </Grid>
                <Grid className="element spaceBetween">
                    <FormControlLabel
                        control={
                            <Checkbox
                                className={classes.root}
                                disableRipple
                                color="default"
                                checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
                                icon={<span className={classes.icon} />}
                                inputProps={{ 'aria-label': 'decorative checkbox' }}
                            // {...props}
                            />
                        }
                        className="remember"
                        label="Remember me"
                    />
                    <Link>
                        <Text fontSize=".7em" className="forgot" color="#707070">
                            Forgot Password?
                        </Text>
                    </Link>
                </Grid>
                <Grid className="element" item>
                    <Box my={3}>
                        <Button size="large" className="button shadow" boxShadow={3} onClick={submitHandler}>
                            <Text fontSize="1.2em">
                                Login
                            </Text>
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Layout>
    );
}