import React from 'react';
import { Grid, Button, InputAdornment, IconButton } from '@material-ui/core';
import ImageNotDraggable from '../../../components/ImageNotDraggable';
import Text from '../../../components/Text/Text';
import './styles.scss';
import Layout from '../../../components/LayoutPreLogin';
import PinInput from 'react-pin-input';

export default function ForgotPassword(){
 
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
        secret: false,
    });

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, secret: !values.secret });
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };
        
    return (
        <Layout>
            <Grid container
                spacing={1}
                direction="column"
                alignItems="center"
                className={`forgot-password-container shadow`}>
                <Grid item className={'card-math-img image element'}>
                    <ImageNotDraggable
                        image={'LOGO'}
                        width={'70%'}
                        id={'img-logo'}
                    />
                </Grid>
                <Grid className="element" item>
                    <Text component={'h1'} className={'title'} fontSize={'1.6em'} align={'center'}  >Reset Password</Text>
                </Grid>
                <Grid className="element" item>
                    <Text component={'span'} fontSize={'0.8em'}>Please enter your new password, It must contain four numerical digits.</Text>
                </Grid>
                <Grid className="element" item>
                    <form>                        
                        <Grid className="element pin-section" item>
                            <PinInput
                                length={4} 
                                initialValue=""
                                secret={values.secret ? false : true}
                                onChange={(value, index) => {}} 
                                type='numeric'
                                style={{margin: '10px'}}  
                                inputStyle={{borderColor: 'black'}}
                                inputFocusStyle={{borderColor: 'blue'}}
                                onComplete={(value, index) => {}}
                            />
                            <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    >
                                    {values.secret ? <InputAdornment position="start"><ImageNotDraggable image={'VISIBILITY'} width={'1.4em'} /></InputAdornment> : <InputAdornment position="start"><ImageNotDraggable image={'VISIBILITY_OFF'} width={'1.4em'} /></InputAdornment>}
                            </IconButton>
                        </Grid>
                        <Button size="large" className="button shadow" type="submit">                       
                            Reset password                        
                        </Button>
                    </form>         
                </Grid>
            </Grid>
        </Layout >
    );
};