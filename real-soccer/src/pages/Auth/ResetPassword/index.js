import React, { Component } from 'react';
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
class ResetPassword extends Component {
    
    constructor() {
        super();

        this.state = {
            value: "",              // Pin value
            secret: true,           // To specify whether the password will be visible or not. By default the value will be true to indicate that the password will be hidden
            pinNotEntered: false,   // Error message when the Pin is not entered in the input fields
            pinShortLength: false,  // Error message when the Pin is less than 4 digits
        };
    }

    /**
     * Receive the event associated with the IconButton
     * and update the state of the property Secret to 
     * to show or hide the Pin and change the SVG image
     * @param  {String} name  Represents the elements of the state
     * @param  {event}  event IconButton event
     * @return none
     */
    handleChangeIcon = name => (event) => {
        this.setState({
            [name]: !this.state.secret, // Change the state of the property Secret 
        });
    };

    /**
     * Receive the Pin input and update the state 
     * @param  {String} value  Represents the Pin value
     * @return none
     */
    handleChangePinInput = value => {
        this.setState({ 
            value: value,
            pinNotEntered: false,   // Error message when the Pin is not entered in the input fields
            pinShortLength: false,  // Error message when the Pin is less than 4 digits
        });
      };

    /**
     * Validate that the Pin is entered and has a length of four
     * then makes calls to the server sending the new user pin
     * @todo Implement this function to recieve response from backend 
     */
    savePassword = async (e) => {        
    e.preventDefault();        
        const { value } = this.state; 
        // Check if the Pin was not entered to show the user a error message
        if (value === '') {
            this.setState({
                pinNotEntered: true, // Error message is enabled
            });
        } // Check if the Pin is less than 4 digits to show the user a error message
        else if(value.length < 4){
            this.setState({
                pinShortLength: true, // Error message is enabled
            });
        } // If the Pin was entered and valid then a request is made to the server
        else {
            // Make code here
        }   
    };

    render() {
        const { secret, pinNotEntered, pinShortLength } = this.state;
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
                        <form onSubmit={this.savePassword}>                        
                            <Grid className="element pin-section" item>
                                {/* Pin field that receives four numerical digits */}
                                <PinInput
                                    length={4} // Four input fields
                                    secret={secret}  // Receive a boolean to indicate that the Pin will be visible or not
                                    onChange={this.handleChangePinInput} // Upadate the state when the Pin input is being edited
                                />
                                {/* IconButton is a toggle button to make the password visible or not.
                                    This button is formed by VISIBILITY and VISIBILITY_OFF SVG images
                                    and these alternate when the button is clicked */}                                
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={this.handleChangeIcon('secret')} // Change the image when the button is clicked
                                >
                                    {secret ? <InputAdornment><ImageNotDraggable image={'VISIBILITY_OFF'} width={'1.4em'} /></InputAdornment> : <InputAdornment><ImageNotDraggable image={'VISIBILITY'} width={'1.4em'} /></InputAdornment>}
                                </IconButton>
                            </Grid>
                            <Button size="large" className="button shadow" type="submit">                       
                                Reset password                        
                            </Button>
                        </form>
                        {/* show messages in the view */}
                        <Text component={'span'} fontSize={'0.8em'} color={'red'} className="message">
                            {/* Show error message when the email address is not entered in the email field */}
                            {pinNotEntered && ('The password cannot be null')}
                            {/* Show error message when the Pin is less than 4 digits */}
                            {pinShortLength && ('The password must have 4 digits')}
                        </Text>           
                    </Grid>
                </Grid>
            </Layout >
        );
    }
};

export default ResetPassword;