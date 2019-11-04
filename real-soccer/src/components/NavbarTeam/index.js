import React from 'react';
import {Button} from "@material-ui/core";
import ImageNotDraggable from "../ImageNotDraggable";
import './styles.scss';

const NavbarTeam = () => (
    <nav className='navbar'>
        <Button className='navbar-action' onClick={() => alert('...')}>
            <ImageNotDraggable width={'20px'} image={'CALENDAR'}/>
        </Button>
        <Button className='navbar-action' onClick={() => alert('...')}>
            <ImageNotDraggable width={'20px'} image={'CLIPBOARD'}/>
        </Button>
        <Button className='navbar-action' onClick={() => alert('...')}>
            <ImageNotDraggable width={'20px'} image={'LIST_OL'}/>
        </Button>
        <Button className='navbar-action' onClick={() => alert('...')}>
            <ImageNotDraggable width={'20px'} image={'ENVELOPE'}/>
        </Button>
    </nav>
);

export default NavbarTeam;
