import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import Icon from "../Icon";

const CardAdd = ({add}) => (
    <div className={'card-add'}>
        {add && <Icon className={'fa-plus card-add-icon'}/>}
        <Icon className={'fa-trophy'} size={125} color={'#171C28'}/>
    </div>
);

CardAdd.propTypes = {
    add: PropTypes.bool
};

export default CardAdd;
