import React from 'react';
import { Grid, Button, InputAdornment, IconButton } from '@material-ui/core'; // "InputAdornment" allows to using the VISIBILITY and VISIBILITY_OFF SVG images into a button
import ImageNotDraggable from '../../../components/ImageNotDraggable'; // To use VISIBILITY and VISIBILITY_OFF SVG images
import Text from '../../../components/Text/Text'; // To use Text Component
import Layout from '../../../components/LayoutPreLogin'; // To use the same login container background
import PinInput from 'react-pin-input'; // It is a react module that allows to use a pin input (numerical digits password)
import './styles.scss';

/**
 * It creates the "Reset Password" view which allows the user
 * to reset his password and it is formed by four numerical digits
 */
export default function ResetPassword(){
 
    const [values, setValues] = React.useState({
        secret: true,  // To specify whether the password will be visible or not. By default the value will be true to indicate that the password will be hidden
    });

    /**
     * Update the state by changing the boolean value of the secret attribute
     */
    const handleClickShowPassword = () => {
        setValues({ ...values, secret: !values.secret });
    };

    return (
        <Layout>
            <Grid container
                spacing={1}
                direction="column"
                alignItems="center"
                className={`forgot-password-container shadow`}>
                <Grid item className={'card-math-img image element'}>
                    {/* Show the page Logo */}
                    <ImageNotDraggable
                        image={'LOGO'}
                        width={'70%'}
                        id={'img-logo'}
                    />
                </Grid>
                <Grid className="element" item>
                    {/* Show the page title */}
                    <Text component={'h1'} className={'title'} fontSize={'1.6em'} align={'center'}  >Reset Password</Text>
                </Grid>
                <Grid className="element" item>
                    {/* Show page information */}
                    <Text component={'span'} fontSize={'0.8em'}>Please enter your new password, It must contain four numerical digits.</Text>
                </Grid>
                <Grid className="element" item>
                    {/* Form to change password */}
                    <form>                        
                        <Grid className="element pin-section" item>
                            {/* Pin field that receives four numerical digits */}
                            <PinInput
                                length={4} // Four fields
                                secret={values.secret ? true : false}  
                            />
                            {/* IconButton is a toggle button to make the password visible or not.
                                This button is formed by VISIBILITY and VISIBILITY_OFF SVG images
                                and these alternate when the button is clicked */}
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                            >
                                {values.secret ? <InputAdornment><ImageNotDraggable image={'VISIBILITY_OFF'} width={'1.4em'} /></InputAdornment> : <InputAdornment><ImageNotDraggable image={'VISIBILITY'} width={'1.4em'} /></InputAdornment>}
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