import React from 'react';
import './styles.scss';
import Icon from "../Icon";

const MenuTeam = () => (
    <nav className='menu-team'>
        <Icon size={25} pointer onClick={() => alert('fa-calendar-day')} className={'fa-calendar-day'}/>
        <Icon size={25} pointer onClick={() => alert('fa-clipboard-list')} className={'fa-clipboard-list'}/>
        <Icon size={25} pointer onClick={() => alert('fa-list-ol')} className={'fa-list-ol'}/>
        <Icon size={25} pointer onClick={() => alert('fa-envelope')} className={'fa-envelope'}/>
    </nav>
);

export default MenuTeam;
