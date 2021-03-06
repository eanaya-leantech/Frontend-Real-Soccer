import React from 'react';
import ImageNotDraggable from '../../ImageNotDraggable';
import Text from "../../Text/Text";
import StateIndicator from '../../StateIndicator'
import './styles.scss';


const Footer = () => {
    return (
        <footer className="footer">
            <Text component={'span'}><StateIndicator currentState="active" />V 1.0</Text>
            <ImageNotDraggable image={'LOGO_LEAN_TECH'} width={'150px'}/>
        </footer>
    )
};

export default Footer;
