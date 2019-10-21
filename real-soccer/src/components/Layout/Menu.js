import React from 'react';
import {NavLink} from "react-router-dom";

export const Menu = () => (
    <section className='menu'>
        <ul>
            <li>
                <NavLink exact  to={'/'} className="menu-item">
                    <i className="fas fa-futbol"/>
                </NavLink>
            </li>
            <li>
                <NavLink to={'/teams'} className="menu-item">
                    <i className="fas fa-user-cog"/>
                </NavLink>
            </li>
            <li>
                <NavLink to={'/b'} className="menu-item">
                    <i className="fas fa-store-alt"/>
                </NavLink>
            </li>
            <li>
                <NavLink to={'/c'} className="menu-item">
                    <i className="fas fa-tshirt"/>
                </NavLink>
            </li>
            <li>
                <NavLink to={'/d'} className="menu-item">
                    <i className="fas fa-medal"/>
                </NavLink>
            </li>
            <li>
                <NavLink to={'/e'} className="menu-item">
                    <i className="fas fa-dumbbell"/>
                </NavLink>
            </li>
        </ul>
    </section>
);
