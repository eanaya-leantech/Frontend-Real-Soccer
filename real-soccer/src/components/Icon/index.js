import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'

const Icon = ({size, color, pointer, className, ...props}) => (
    <i className={`fas ${className}`}
       {...props}
       style={{
           fontSize: `${size || 20}px`,
           color: `${color || '#fff'}`,
           cursor: `${pointer ? 'pointer' : 'default'}`
       }}/>
);

Icon.propTypes = {
    size:PropTypes.number,
    color:PropTypes.string,
    cursor:PropTypes.string,
    className:PropTypes.string.isRequired
};

export default Icon;
