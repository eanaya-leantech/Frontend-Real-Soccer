import React from 'react';
import PropTypes from 'prop-types';
import {IMAGES} from "../../assets/images";

const ImageNotDraggable = ({image, size,className}) => (
    <img src={IMAGES[image] || image} alt=""
         width={size} draggable='false'
         className={className}
    />
);

ImageNotDraggable.propTypes = {
    image: PropTypes.string.isRequired,
    size: PropTypes.number,
    className:PropTypes.string
};

export default ImageNotDraggable;
