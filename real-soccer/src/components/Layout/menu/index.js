import React from 'react';
import {NavLink} from "react-router-dom";
import {List, ListItem} from '@material-ui/core';
import ImageNotDraggable from "../../ImageNotDraggable";
import './styles.scss';

const Menu = ({show}) => (
    <List component="nav" className='menu'>
        <ListItem className="menu-item">
            <NavLink to={'/matches'} className={`menu-link ${show}`}>
                <ImageNotDraggable width={'20px'} image={'FUTBOL'}/>
                <span>Matches</span>
            </NavLink>
        </ListItem>
        <ListItem className="menu-item">
            <NavLink exact to={'/'} className={`menu-link ${show}`}>
                <ImageNotDraggable image={'USER_CONG'} width={'20px'}/>
                <span>My team</span>
            </NavLink>
        </ListItem>
        <ListItem className="menu-item">
            <NavLink to={'/store'} className={`menu-link ${show}`}>
                <ImageNotDraggable image={'STORE_ALT'} width={'20px'}/>
                <span>Store</span>
            </NavLink>
        </ListItem>
        <ListItem className="menu-item">
            <NavLink to={'/uniforms'} className={`menu-link ${show}`}>
                <ImageNotDraggable image={'TSHIRT'} width={'20px'}/>
                <span>Uniforms</span>
            </NavLink>
        </ListItem>
        <ListItem className="menu-item">
            <NavLink to={'/trophy'} className={`menu-link ${show}`}>
                <ImageNotDraggable image={'MEDAL_SOLID'} width={'20px'}/>
                <span>Trophy</span>
            </NavLink>
        </ListItem>
        <ListItem className="menu-item">
            <NavLink to={'/gym'} className={`menu-link ${show}`}>
                <ImageNotDraggable image={'DUMBBELL'} width={'20px'}/>
                <span>Gym</span>
            </NavLink>
        </ListItem>
        <ListItem className="menu-item">
            <NavLink to={'/friends'} className={`menu-link ${show}`}>
                <ImageNotDraggable image={'USERS'} width={'20px'}/>
                <span>Friends</span>
            </NavLink>
        </ListItem>
        <ListItem className="menu-item">
            <NavLink to={'/analytics'} className={`menu-link ${show}`}>
                <ImageNotDraggable image={'CHART_LINE'} width={'20px'}/>
                <span>Analytics</span>
            </NavLink>
        </ListItem>
    </List>
);

export default Menu;
