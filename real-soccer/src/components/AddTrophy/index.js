import React from 'react';
import ImageNotDraggable from "../ImageNotDraggable";
import './styles.scss';

const AddTrophy = () => (
    <div className={'trophy'}>
        <ImageNotDraggable width={'20px'} image={'PLUS'} className={'trophy-icon'} cursor={'pointer'}
                           onClick={() => alert('add')}
        />
    </div>
);

export default AddTrophy;
