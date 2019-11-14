import React, { Component } from 'react';
import { Grid, Button, InputAdornment, OutlinedInput } from '@material-ui/core'; // "InputAdornment" allows to incorporate an image into a "OutlinedInput" text field
import ImageNotDraggable from '../../../components/ImageNotDraggable'; // To use LOGO and EMAIL SVG images
import Text from '../../../components/Text/Text'; // To use Text Component
import Layout from '../../../components/LayoutPreLogin';  // To use the same login container background
import axios from 'axios'; // Library to make AJAX calls to the server
import './styles.scss';

/**
 * It creates the "Forgot Password" view which only receives the user's email
 * to send him an email with a link that would redirect him to a protected
 * page on the web site, where the user could reset his numeric pin password
 */
class ForgotPassword extends Component {
    constructor() {
        super();

        this.state = {
            email: '',                // Email address
            userDoesNotExist: false,  // Error message when the user does not exist in the system
            recoveryEmailSent: false, // Successfull message when a email is sent to the user to reset the password
            showNullError: false,     // Error message when the email address is not entered in the email field
        };
    }

    /**
     * Receive the event associated with the email field input
     * and update the state by adding the email
     * @param  {String} name  Represents the elements of the state
     * @param  {event}  event Email input event
     * @return none
     */
    handleChange = name => (event) => {
        this.setState({
            [name]: event.target.value,
        });
    };

    /**
     * Validate that the email address is entered and makes calls to the server sending the user's email address
     * @todo Implement this function to recieve response
     * from backend about the existence of email address
     * and sending the password reset link
     */
    sendEmail = async (e) => {
        e.preventDefault();
        const { email } = this.state;
        // Check if the email address was not entered to show the user a error message
        if (email === '') {
            this.setState({
                userDoesNotExist: false,
                recoveryEmailSent: false,
                showNullError: true, // Error message is enabled
            });
        } else {
            try {
                const response = await axios.post(
                    'http://localhost:3000/forgotPassword',
                    {
                        email,
                    },
                );
                console.log(response.data);
                // Check if a successful response was received from the server to show the user a successful message 
                if (response.data === 'recovery email sent') {
                    this.setState({
                        userDoesNotExist: false,
                        recoveryEmailSent: true, // Successful message is enabled
                        showNullError: false,
                    });
                }
            } catch (error) {
                //console.error(error.response.data);
                // Check if a non-existent email address response was received from the server to show the user a error message
                if (error.response.data === 'email not in db') {
                    this.setState({
                        userDoesNotExist: true, // Error message is enabled
                        recoveryEmailSent: false,
                        showNullError: false,
                    });
                }
            }
        }
    };

    render() {
        const { recoveryEmailSent, showNullError, userDoesNotExist } = this.state;
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
                        <Text component={'h1'} className={'title'} fontSize={'1.6em'} align={'center'}  >Forgot Password</Text>
                    </Grid>
                    <Grid className="element" item>
                        {/* Show page information */}
                        <Text component={'span'} fontSize={'0.8em'}>Please enter your email address and we will send you a link to reset your password.</Text>
                    </Grid>
                    <Grid className="element" item>
                        {/* Form to enter email address */}
                        <form onSubmit={this.sendEmail}>
                            {/* "OutlinedInput" is used as a email field with image
                                "InputAdornment" allows to incorporate the EMAIL SVG image into the "OutlinedInput" text field
                                "startAdornment" locates the image at the beginning of the "OutlinedInput" text field */}                           
                            <OutlinedInput fullWidth className="input-field"
                                onChange={this.handleChange('email')}                                
                                startAdornment={<InputAdornment position="start"><ImageNotDraggable image={'EMAIL'} width={'1.4em'} /></InputAdornment>} // It incorporates the image at the beginning of the field
                                placeholder="Enter your email address"
                            />
                            {/* Show error message when the email address is not entered in the email field */}                            
                            {showNullError && (
                                <Text component={'span'} fontSize={'0.8em'} color={'red'} className="warning-message">The email address cannot be null</Text>
                            )}
                            <Button size="large" className="button shadow" type="submit">                       
                                Send reset email                        
                            </Button>
                        </form>
                        {/* Show error message when the email address doesn't exist in the system */}  
                        {userDoesNotExist && (
                            <Text component={'span'} fontSize={'0.8em'}>
                                That email address is not recognized. Please try again or register for a new account.
                            </Text>
                        )}
                        {/* Show a successful message when the email has been sent */}
                        {recoveryEmailSent && (
                            <Text component={'span'} fontSize={'0.8em'}>Password Reset Email Successfully Sent!</Text>
                        )}
                    </Grid>
                </Grid>
            </Layout >
        );
    }
};

export default ForgotPassword;