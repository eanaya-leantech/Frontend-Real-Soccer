import React from 'react';
import Proptypes from 'prop-types';
import {Grid, Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import Text from "../../components/Text/Text";
import './style.scss';

const ErrorComponent = ({error, message}) => (

    <Grid container justify={'center'} alignItems={'center'} className={'error-container'}>
        <Grid className={'message'}>
            <Text component={'h1'} className={"title"} fontSize={'12em'}>{error}</Text>
            <Text component={'h3'} className={"subtitle"} fontSize={'38px'}>OOPS!!!</Text>
            <Text component={'p'} className={"paragraph"}>{message}</Text>
            <Link to={'/'} className={'go-back'}>
                <Button>
                    Go back
                </Button>
            </Link>

        </Grid>
    </Grid>
);

ErrorComponent.propTypes = {
    error:Proptypes.string.isRequired,
    message:Proptypes.string.isRequired,
}

export default ErrorComponent;

