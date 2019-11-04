import React from 'react';
import PropTypes from 'prop-types';
import ASSETS from "../../assets/assets";

const ImageNotDraggable = ({width, height = 'auto', image, url, cursor = 'inherit', ...props}) => (
    <img
        {...props}
        src={image ? ASSETS[image] : url}
        draggable='false'
        style={{
            width,
            height,
            cursor
        }}
    />
);

ImageNotDraggable.propTypes = {
    width: PropTypes.string.isRequired,
    height: PropTypes.string,
    image: PropTypes.string,
    url: PropTypes.string,
    cursor: PropTypes.string
};

export default ImageNotDraggable;
