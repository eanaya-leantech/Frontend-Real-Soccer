import React from 'react';
import { Grid, Button, FormControl, InputAdornment, OutlinedInput } from '@material-ui/core';
import ImageNotDraggable from '../../../components/ImageNotDraggable';
import Text from '../../../components/Text/Text';
import './styles.scss';
import Layout from '../../../components/LayoutPreLogin';

export default () => { 
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
                    <form>
                        <FormControl fullWidth id={'email-field-edge'} >
                            <OutlinedInput className="email-field"
                                id="outlined-adornment-weight"
                                startAdornment={<InputAdornment position="start"><ImageNotDraggable image={'EMAIL'} width={'1.4em'} /></InputAdornment>}
                                placeholder="Enter your email address"                          
                            />
                        </FormControl>                    
                        <Button size="large" className="button shadow">                       
                            Send reset email                        
                        </Button>
                    </form>
                </Grid>                         
            </Grid>
        </Layout>
    )
};