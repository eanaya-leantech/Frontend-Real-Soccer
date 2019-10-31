import React, {useState} from 'react';
import './styles.scss';
import ImageNotDraggable from "../../ImageNotDraggable";

const Header = ({show, setShow}) => {
    return (
        <header className="header">
            <ImageNotDraggable width={'22px'} image={'BARS'} cursor={'pointer'}
                               onClick={() => setShow(!show)}
            />
        </header>
    )
};

export default Header;
