import React from 'react';
import { Grid, Button, FormControl, InputAdornment, OutlinedInput } from '@material-ui/core';
import ImageNotDraggable from '../../../components/ImageNotDraggable';
import Text from '../../../components/Text/Text';
import './styles.scss';
import Layout from '../../../components/LayoutPreLogin';
//import Visibility from '@material-ui/icons/Visibility';
//import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';

export default function ForgotPassword(){
 
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
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
                        <Text component={'h1'} className={'title'} fontSize={'1.6em'} align={'center'}  >Reset your password</Text>
                    </Grid>
                    <Grid className="element" item>

                    <form >
                        <FormControl fullWidth id={'email-field-edge'} >
                            <OutlinedInput className="email-field"
                                id="outlined-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    >
                                    {values.showPassword ? <InputAdornment position="start"><ImageNotDraggable image={'VISIBILITY'} width={'1.4em'} /></InputAdornment> : <InputAdornment position="start"><ImageNotDraggable image={'VISIBILITY_OFF'} width={'1.4em'} /></InputAdornment>}
                                    </IconButton>
                                </InputAdornment>
                                }
                                placeholder="Enter new password"
                            />
                        </FormControl>                       
                        
                        <Button size="large" className="button shadow" type="submit">                       
                            Reset password                        
                        </Button>
                    </form>                    
                   
                    </Grid>
                </Grid>
            </Layout >
        );

};