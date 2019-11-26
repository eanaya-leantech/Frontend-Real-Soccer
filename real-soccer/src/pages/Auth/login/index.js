import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Box, CircularProgress } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import clsx from 'clsx';
import Layout from '../../../components/LayoutPreLogin';
import ImageNotDraggable from '../../../components/ImageNotDraggable';
import Text from '../../../components/Text/Text';
import './styles.scss';
import {connect} from 'react-redux'
import {basicPassword} from '../../../utils/validators'
import { signIn }from '../../../redux/actions/authActions'

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



function SpacingGrid(props) {
    // const [setSpacing] = React.useState(2);
    const [state, setState] = React.useState({
        rememberMe: false
    })
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        let isCorrectUser;
        let isCorrectPass=basicPassword(state.password)
        
        if(!state.user){
            isCorrectUser=false;
            document.getElementsByName('user')[0].classList.add('error')
        }else{
            isCorrectUser=true;
            document.getElementsByName('user')[0].classList.remove('error')
        }

        if(!isCorrectPass.isValid){
            document.getElementsByName('password')[0].classList.add('error')
        }else{
            document.getElementsByName('password')[0].classList.remove('error')
        }
        if(isCorrectUser&& isCorrectPass.isValid){
                    props.signIn({
                credentials:{
                    username: state.user,
                    password: state.password
                },
                    redirect: props.history
                },)
           
        }

        
    }
    const handleChange = e =>{
            e.target.type==='checkbox'?
            setState({ ...state, [e.target.name]: e.target.checked })
            :setState({ ...state, [e.target.name]: e.target.value })
    };
    
    
    
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
                        width= '116px'
                        image={'PERSON'}
                        className={'card-math-img image'} />
                </Grid>
                <Grid className="element">
                    <Text fontSize='1.8em' component='h1' textAlign='center'>
                        
                            Real Soccer
                       
                    </Text>
                </Grid>
                <Grid className="element" item>
                    {/* <ImageNotDraggable className="logo" width={'30px'} cursor={'pointer'} image={'USER'}
                        onClick={() => console.log('soy login..')}
                    /> */}
                    <input className="input" type="text" name="user" onChange={handleChange} placeholder="Username"></input>
                </Grid>
                <Grid className="element" item>
                    <input className="input" type="password" name="password" onChange={handleChange} placeholder="Password"></input>
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
                                name='rememberMe'
                                onChange={handleChange}
                            // {...props}
                            />
                        }
                        className="remember"
                        label="Remember me"
                    />
                    <Link to={'/forgotpassword'}>
                        <Text fontSize=".7em" className="forgot" color="#707070" component='h3' >
                            Forgot Password?
                        </Text>
                    </Link>
                </Grid>
                <Grid className="element" item>
                    <Box my={3}>
                        <Button size="large" className="button shadow" onClick={handleSubmit} >
                            <Text fontSize="1.2em" component='h2'>
                                {props.isLoading?<CircularProgress size='1em' />:'LOGIN'}
                            </Text>
                        </Button>
                    </Box>
                </Grid>
                <div className={props.error?'error-login': null}>
                {props.error?`${props.error}`:null}
                </div>
            </Grid>
        </Layout>
    );
}

const mapStateToProps = (state) => {
    const {isLoading, error}= state.signProccess
    return{
        isLoading,error
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{ 
        signIn: credentials =>dispatch(signIn(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpacingGrid)
