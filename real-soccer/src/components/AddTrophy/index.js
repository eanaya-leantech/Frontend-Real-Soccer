import React from 'react';
import {IconButton} from "@material-ui/core";
import ImageNotDraggable from "../ImageNotDraggable";
import './styles.scss';

const AddTrophy = () => (
    <div className={'trophy'}>
      <IconButton className={'trophy-icon'}>
          <ImageNotDraggable width={'20px'} image={'PLUS'}  cursor={'pointer'}/>
      </IconButton>
    </div>
);

export default AddTrophy;
