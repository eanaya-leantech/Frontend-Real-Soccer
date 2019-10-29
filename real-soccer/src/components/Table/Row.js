import React from 'react';
import PropTypes from 'prop-types';

const Row = ({id, name, position}) => (
    <tr>
        <td>
            <span>{position}</span>
        </td>
        <td>
            {name}
        </td>
    </tr>
);

Row.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired
};

export default Row;


