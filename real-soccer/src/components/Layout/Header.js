import React from 'react';

export const Header = ({setMenuShow,menuShow}) => (
    <header className="header">
       <span className="icon" onClick={() => setMenuShow(!menuShow)}>
            icon
       </span>
        <h3 className="title">
            Real Soccer
        </h3>
        <div className="info">
            config
        </div>
    </header>
);