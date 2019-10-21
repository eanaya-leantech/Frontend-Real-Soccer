import React from 'react';

export const Header = ({setMenuShow, menuShow}) => (
    <header className="header">
        <span className="icon fas fa-bars" onClick={() => setMenuShow(!menuShow)}/>
        <h1 className="title">Real Soccer <i className="far fa-futbol"/></h1>
        <div className="info">
            <div className="money">
               <span className="bg-info">
                    <i className="fas fa-money-bill-wave"/>
               </span>
                <span className="bg-info">
                   $ 105.000
               </span>
            </div>
            <div className="config">
                <i className="fas fa-bell"/>
                <i className="fas fa-cog"/>
            </div>
        </div>
    </header>
);
