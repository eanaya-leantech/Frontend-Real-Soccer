import React from 'react';
import ImageNotDraggable from '../../ImageNotDraggable';
import './styles.scss';

const Footer = () => {
    return(
        <footer className="footer">
            <ImageNotDraggable image={'LOGO_LEAN_TECH'} size={150}/>
        </footer>
    )
};

export default Footer;
