import React from 'react';
import ImageNotDraggable from "../ImageNotDraggable";
import './styles.scss';

const NavbarTeam = () => (
    <nav className='navbar'>
        <button className='navbar-action' onClick={() => alert('...')}>
            <ImageNotDraggable width={'20px'} image={'CALENDAR'}/>
        </button>
        <button className='navbar-action' onClick={() => alert('...')}>
            <ImageNotDraggable width={'20px'} image={'CLIPBOARD'}/>
        </button>
        <button className='navbar-action' onClick={() => alert('...')}>
            <ImageNotDraggable width={'20px'} image={'LIST_OL'}/>
        </button>
        <button className='navbar-action' onClick={() => alert('...')}>
            <ImageNotDraggable width={'20px'} image={'ENVELOPE'}/>
        </button>
    </nav>
);

export default NavbarTeam;
