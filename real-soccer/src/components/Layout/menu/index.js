import React from 'react';
import {NavLink} from "react-router-dom";
import {Icon} from "../../Icon";
import './styles.scss';

export const Menu = () => (
    <section className='menu'>
        <ul>
            <li>
                <NavLink exact to={'/'} className="menu-item">
                    <Icon size={20} icon={'fa-futbol'}/>
                    <span className={'menu-item-text'}>settings 1</span>
                </NavLink>
            </li>
            <li>
                <NavLink to={'/teams'} className="menu-item">
                    <Icon size={20} icon={'fa-user-cog'}/>
                    <span className={'menu-item-text'}>settings 1</span>
                </NavLink>
            </li>
            <li>
                <NavLink to={'/b'} className="menu-item">
                    <Icon size={20} icon={'fa-store-alt'}/>
                    <span className={'menu-item-text'}>settings 1</span>
                </NavLink>
            </li>
            <li>
                <NavLink to={'/c'} className="menu-item">
                    <Icon size={20} icon={'fa-tshirt'}/>
                    <span className={'menu-item-text'}>settings 1</span>
                </NavLink>
            </li>
            <li>
                <NavLink to={'/d'} className="menu-item">
                    <Icon size={20} icon={'fa-medal'}/>
                    <span className={'menu-item-text'}>settings 1</span>
                </NavLink>
            </li>
            <li>
                <NavLink to={'/e'} className="menu-item">
                    <Icon size={20} icon={'fa-dumbbell'}/>
                    <span className={'menu-item-text'}>settings 1</span>
                </NavLink>
            </li>
            <li>
                <NavLink to={'/e'} className="menu-item">
                    <Icon size={20} icon={'fa-users'}/>
                    <span className={'menu-item-text'}>settings 1</span>
                </NavLink>
            </li>
            <li>
                <NavLink to={'/e'} className="menu-item">
                    <Icon size={20} icon={'fa-chart-line'}/>
                    <span className={'menu-item-text'}>settings 1</span>
                </NavLink>
            </li>
        </ul>
    </section>
);
