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
                </NavLink>
            </li>
            <li>
                <NavLink to={'/teams'} className="menu-item">
                    <Icon size={20} icon={'fa-user-cog'}/>
                </NavLink>
            </li>
            <li>
                <NavLink to={'/b'} className="menu-item">
                    <Icon size={20} icon={'fa-store-alt'}/>
                </NavLink>
            </li>
            <li>
                <NavLink to={'/c'} className="menu-item">
                    <Icon size={20} icon={'fa-tshirt'}/>
                </NavLink>
            </li>
            <li>
                <NavLink to={'/d'} className="menu-item">
                    <Icon size={20} icon={'fa-medal'}/>
                </NavLink>
            </li>
            <li>
                <NavLink to={'/e'} className="menu-item">
                    <Icon size={20} icon={'fa-dumbbell'}/>
                </NavLink>
            </li>
            <li>
                <NavLink to={'/e'} className="menu-item">
                    <Icon size={20} icon={'fa-users'}/>
                </NavLink>
            </li>
            <li>
                <NavLink to={'/e'} className="menu-item">
                    <Icon size={20} icon={'fa-chart-line'}/>
                </NavLink>
            </li>
        </ul>
    </section>
);
