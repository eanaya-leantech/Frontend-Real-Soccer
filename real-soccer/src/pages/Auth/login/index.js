import React, {useEffect} from 'react';
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
        backgroundColor: '#191e2b',
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
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [isChecked, setChecked] = React.useState(false)
    const [correctUser, setCorrectUser] = React.useState(()=>(
        username.length>0?true:false
    ))
    const [correctPass, setCorrectPass] = React.useState(()=>(
        basicPassword(password).isValid
    ))
    const [inputError, setInputError] = React.useState({ userInput: false, passwordInput: false})
    useEffect(()=>{
        setCorrectUser(username.length>0?true:false)
        setCorrectPass(basicPassword(password).isValid)
    }, [username,password,correctUser,correctPass])
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        setInputError({ passwordInput: !correctPass, userInput: !correctUser})
        if(correctPass && correctUser){
            props.signIn({
                credentials:{
                    username,
                    password
                },
                redirect: props.history
            },)
           
        }

        
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
                        width= '116px'
                        image={'PERSON'}
                        className={'card-math-img image'} />
                </Grid>
                <Grid className="element"  item>
                    <Text fontSize='1.8em' textAlign='center' component='h1'>
                        
                            Real Soccer
                       
                    </Text>
                </Grid>
                <Grid className="element" item>
                    <input className={`input ${inputError.userInput?'error':null}`} type="text" name="user" onChange={(e)=>{
                        setUsername(e.target.value)
                    }} placeholder="Username"></input>
                </Grid>
                <Grid className="element" item>
                    <input className={`input ${inputError.passwordInput?'error':null}`} type="password" name="password" onChange={(e)=>{
                        setPassword(e.target.value)
                    }} placeholder="Password"></input>
                </Grid>
                <Grid className="element spaceBetween">
                    <FormControlLabel
                        control={
                            <Checkbox
                                disableRipple
                                color="default"
                                checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
                                icon={<span className={classes.icon} />}
                                inputProps={{ 'aria-label': 'decorative checkbox' }}
                                name='rememberMe'
                                onChange={(e)=>{
                                    setChecked(e.target.checked)
                                }}
                            // {...props}
                            />
                        }
                        className="remember"
                        label="Remember me"
                    />
                    <Link to={'/forgotpassword'}>
                        <Text fontSize=".7em" className="forgot" color="#707070" component='h3' textAlign='rigth'>
                            Forgot Password?
                        </Text>
                    </Link>
                </Grid>
                <Grid className="element" item>
                    <Box my={3}>
                        <Button size="large" className="button shadow" onClick={handleSubmit} >
                            <Text fontSize="1.2em" textAlign='center' component='h2'>
                                {props.isLoading?<CircularProgress size='1em' />:'LOGIN'}
                            </Text>
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Layout>
    );
}

const mapStateToProps = (state) => {
    const {isLoading}= state.signProccess
    return{
        isLoading
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{ 
        signIn: credentials =>dispatch(signIn(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpacingGrid)
