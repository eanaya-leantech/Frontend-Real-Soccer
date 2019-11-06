import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom";
import {List, ListItem} from '@material-ui/core';
import ImageNotDraggable from "../../ImageNotDraggable";
import Text from "../../Text/Text";
import './styles.scss';

const Menu = ({show}) => (
    <List component="nav" className='menu'>
        <ListItem className="menu-item">
            <NavLink to={'/matches'} className={`menu-link ${show}`}>
                <div><ImageNotDraggable width={'20px'} image={'FUTBOL'}/></div>
                <Text className={'link-text'} component={'span'}>Matches</Text>
            </NavLink>
        </ListItem>
        <ListItem className="menu-item">
            <NavLink exact to={'/'} className={`menu-link ${show}`}>
                <div><ImageNotDraggable image={'USER_CONG'} width={'20px'}/></div>
                <Text className={'link-text'} component={'span'}>My team</Text>
            </NavLink>
        </ListItem>
        <ListItem className="menu-item">
            <NavLink to={'/store'} className={`menu-link ${show}`}>
                <div><ImageNotDraggable image={'STORE_ALT'} width={'20px'}/></div>
                <Text className={'link-text'} component={'span'}>Store</Text>
            </NavLink>
        </ListItem>
        <ListItem className="menu-item">
            <NavLink to={'/uniforms'} className={`menu-link ${show}`}>
                <div><ImageNotDraggable image={'TSHIRT'} width={'20px'}/></div>
                <Text className={'link-text'} component={'span'}>Uniforms</Text>
            </NavLink>
        </ListItem>
        <ListItem className="menu-item">
            <NavLink to={'/trophy'} className={`menu-link ${show}`}>
                <div><ImageNotDraggable image={'MEDAL_SOLID'} width={'20px'}/></div>
                <Text className={'link-text'} component={'span'}>Trophy</Text>
            </NavLink>
        </ListItem>
        <ListItem className="menu-item">
            <NavLink to={'/gym'} className={`menu-link ${show}`}>
                <div><ImageNotDraggable image={'DUMBBELL'} width={'20px'}/></div>
                <Text className={'link-text'} component={'span'}>Gym</Text>
            </NavLink>
        </ListItem>
        <ListItem className="menu-item">
            <NavLink to={'/friends'} className={`menu-link ${show}`}>
                <div><ImageNotDraggable image={'USERS'} width={'20px'}/></div>
                <Text className={'link-text'} component={'span'}>Friends</Text>
            </NavLink>
        </ListItem>
        <ListItem className="menu-item">
            <NavLink to={'/analytics'} className={`menu-link ${show}`}>
                <div><ImageNotDraggable image={'CHART_LINE'} width={'20px'}/></div>
                <Text className={'link-text'} component={'span'}>Analytics</Text>
            </NavLink>
        </ListItem>
    </List>
);

Menu.propTypes = {
    show: PropTypes.bool.isRequired
};

export default Menu;
