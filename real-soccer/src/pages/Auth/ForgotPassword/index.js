import React, { Component } from 'react';
import { Grid, Button, InputAdornment, OutlinedInput, CircularProgress } from '@material-ui/core'; // "InputAdornment" allows to incorporate an image into a "OutlinedInput" text field
import ImageNotDraggable from '../../../components/ImageNotDraggable'; // To use LOGO and EMAIL SVG images
import Text from '../../../components/Text/Text'; // To use Text Component
import Layout from '../../../components/LayoutPreLogin';  // To use the same login container background
import { emailValidator } from '../../../utils/validators';  // To use email validator 
import API from '../../../API/index'; //To make calls to the server
import { connect } from 'react-redux';
import { recoverPasswordStart } from '../../../redux/actions/forgotPasswordActions';
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
            mailNotEntered: false,    // Error message when the email address is not entered in the email field
            invalidEmail: false,      // Error message when the email is invalid
            errorSendingData: false,
        };
    }

    /**
     * Receive the event associated with the email field input and update the state 
     * @param  {String} name  Represents the elements of the state
     * @param  {event}  event Email input event
     * @return none
     */
    handleChange = name => (event) => {
        this.setState({
            [name]: event.target.value, // Email address state is updated
            userDoesNotExist: false,    // Error message when the user does not exist in the system
            recoveryEmailSent: false,   // Successfull message when a email is sent to the user to reset the password
            mailNotEntered: false,      // Error message when the email address is not entered in the email field
            invalidEmail: false,        // Error message when the email is invalid
            errorSendingData: false,
        });
    };

    /**
     * Validate that the email address is entered and valid
     * then makes calls to the server sending the user's email address
     * @todo Implement this function to recieve response
     * from backend about the existence of email address
     * and sending the password reset link
     */
    hanldeSubmitSendEmail = async (e) => {              
        e.preventDefault();    
        const { email } = this.state;      
        // Check if the email address was not entered to show the user a error message
        if (email === '') {
            this.setState({
                mailNotEntered: true, // Error message is enabled
            });
        } // Check if the email address is invalid to show the user a error message
        else if(!emailValidator(email).isValid){
            this.setState({
                invalidEmail: true, // Error message is enabled
            });
        } // If the email address was entered and valid then a request is made to the server
        else {
            // Make code here
            this.props.recoverPasswordStart();
            console.log('Props: ', this.props); 
            if(this.props.error=="Error sending data"){
                this.setState({
                    errorSendingData: true, // Error message is enabled
                });
            }
        }
    };

    render() {
        const { email, recoveryEmailSent, mailNotEntered, userDoesNotExist, invalidEmail, errorSendingData } = this.state;
        return (
            <Layout>
                <Grid container
                    spacing={1}
                    direction="column"
                    alignItems="center"
                    className={`forgot-password-container shadow`}>
                    <Grid item className={'card-math-img-pass image element'}>
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
                        <form onSubmit={this.hanldeSubmitSendEmail}>
                            {/* OutlinedInput is used as a email field with image
                                InputAdornment allows to incorporate the EMAIL SVG image into the OutlinedInput text field.
                                startAdornment locates the image at the beginning of the OutlinedInput text field */}                           
                            <OutlinedInput fullWidth className="input-field"
                                value={email}
                                onChange={this.handleChange('email')}  // Upadate the state when the email input is being edited                               
                                startAdornment={<InputAdornment position="start"><ImageNotDraggable image={'EMAIL'} width={'1.4em'} /></InputAdornment>} // It incorporates the image at the beginning of the field
                                placeholder="Enter your email address"
                            />                                                     
                            <Button size="large" className="shadow" id="button-password" type="submit">
                                {this.props.isLoading ? "Sending .." : "Send reset email"}                  
                            </Button>
                        </form>
                        {/* Show a successful message when the email has been sent */}
                        {recoveryEmailSent && (
                            <Text component={'span'} fontSize={'0.8em'} color={'#15a20b'} className="message">Password reset email successfully sent to {email}</Text>
                        )}
                         {/* show messages in the view */}
                         <Text component={'span'} fontSize={'0.8em'} color={'red'} className="message">
                            {/* Show error message when the email address is not entered in the email field */}
                            {mailNotEntered && ('The email address cannot be null')}
                            {/* Show error message when the email address doesn't exist in the system */}   
                            {userDoesNotExist && ('That email address is not recognized. Please try again or register for a new account')}
                            {/* Show error message when the email is invalid */}   
                            {invalidEmail && ('The email address is invalid. It should seems like example@email.com')}
                            {/* Show error message */}
                            {errorSendingData && ('Error sending data')}
                        </Text>  
                    </Grid>
                </Grid>
            </Layout >
        );
    }
};

const mapStateToProps = state => {
    const {isLoading, error, forgotPasswordConfirm} = state.forgotPassword;
    return{
        isLoading, error, forgotPasswordConfirm
    }
}

const mapDispatchToProps = dispatch => {
    return{ 
        recoverPasswordStart: payload => dispatch(recoverPasswordStart(payload))
    }
}

// export default ForgotPassword;
export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)