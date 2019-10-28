import React from 'react';
import './styles.scss';
import Icon from "../../Icon";

const Aside = ({show, setShow, children}) => (
    <aside className={`aside ${show ? 'show' : ''}`}>
        <Icon className={"fa-times aside-close"} pointer
            onClick={() => setShow(!show)}
        />
        {children}
    </aside>
);

export default Aside;
