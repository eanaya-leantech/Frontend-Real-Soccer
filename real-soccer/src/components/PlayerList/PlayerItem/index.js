import React from 'react';
import PropTypes from 'prop-types';
import {IconButton} from "@material-ui/core";
import ImageNotDraggable from "../../ImageNotDraggable";

import './styles.scss';

const PlayerItem = ({id, name, position}) => (
    <tr className={'player-item'}>
        <td width={'20px'} className={position}>{position}</td>
        <td>{name}</td>
        <td width={'20px'}>
            <IconButton>
                <ImageNotDraggable width={'20px'} image={'MINIMUS'}/>
            </IconButton>
        </td>
    </tr>
);

PlayerItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired
};

export default PlayerItem;
