import React from 'react';
import PropTypes from 'prop-types';
import {Typography} from "@material-ui/core";

const Text = ({children, fontSize = '1em', color = 'white', fontWeight = 'normal', component, ...props}) => (
    <Typography
        component={component}
        {...props}
        style={{
            fontSize,
            color,
            fontWeight,
        }}
    >
        {children}
    </Typography>
);

Text.propTypes = {
    children: PropTypes.node.isRequired,
    fontSize: PropTypes.string,
    color: PropTypes.string,
    component: PropTypes.string.isRequired
};

export default Text;
