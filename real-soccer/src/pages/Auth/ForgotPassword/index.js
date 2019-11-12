import React, { Component } from 'react';
import { Grid, Button, FormControl, InputAdornment, OutlinedInput } from '@material-ui/core';
import ImageNotDraggable from '../../../components/ImageNotDraggable';
import Text from '../../../components/Text/Text';
import './styles.scss';
import Layout from '../../../components/LayoutPreLogin';
import axios from 'axios';

class ForgotPassword extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            showError: false,
            messageFromServer: '',
            showNullError: false,
        };
    }

    handleChange = name => (event) => {
        this.setState({
            [name]: event.target.value,
        });
    };

    sendEmail = async (e) => {
        e.preventDefault();
        const { email } = this.state;
        if (email === '') {
            this.setState({
                showError: false,
                messageFromServer: '',
                showNullError: true,
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
                if (response.data === 'recovery email sent') {
                    this.setState({
                        showError: false,
                        messageFromServer: 'recovery email sent',
                        showNullError: false,
                    });
                }
            } catch (error) {
                console.error(error.response.data);
                if (error.response.data === 'email not in db') {
                    this.setState({
                        showError: true,
                        messageFromServer: '',
                        showNullError: false,
                    });
                }
            }
        }
    };

    render() {
        const {
            email, messageFromServer, showNullError, showError
        } = this.state;

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
                        <Text component={'span'} fontSize={'0.8em'}>Enter your email address and we will send you a link to reset your password.</Text>
                    </Grid>
                    <Grid className="element" item>

                    <form onSubmit={this.sendEmail}>
                        <FormControl fullWidth id={'email-field-edge'} >
                            <OutlinedInput className="email-field"
                                id="email"
                                onChange={this.handleChange('email')}
                                startAdornment={<InputAdornment position="start"><ImageNotDraggable image={'EMAIL'} width={'1.4em'} /></InputAdornment>}
                                placeholder="Enter your email address"
                            />
                        </FormControl>
                        {showNullError && (
                            <div className="warning-message" >
                                <Text component={'span'} fontSize={'0.8em'} color={'red'}>The email address cannot be null</Text>
                            </div>
                        )}
                        <Button size="large" className="button shadow" type="submit">                       
                            Send reset email                        
                        </Button>
                    </form>                    
                    {showError && (
                        <div>
                            <Text component={'span'} fontSize={'0.8em'}>
                                That email address isn&apos;t recognized. Please try again or
                                register for a new account.
                            </Text>                        
                        </div>
                    )}
                    {messageFromServer === 'recovery email sent' && (
                        <div>
                            <Text component={'span'} fontSize={'0.8em'}>Password Reset Email Successfully Sent!</Text>
                        </div>
                    )}
                    </Grid>
                </Grid>
            </Layout >
        );
    }
};

export default ForgotPassword;