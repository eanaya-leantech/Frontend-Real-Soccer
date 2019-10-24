import React from 'react';
import './styles.scss';
import {Icon} from "../../Icon";

export const Header = ({setMenuShow, menuShow, asideShow, setAsideShow, ...props}) => (
    <header className="header">
        <Icon className="icon" icon={'fa-bars'}
              onClick={() => setMenuShow(!menuShow)}
        />
        <h1 className="title">
            Real Soccer
            <Icon size={22} icon={'fa-running'} className={"ml-1"}/>
            <Icon size={10} icon={'fa-futbol'}/>
        </h1>
        <div className="info">
            <span className="money bg-info">
                 <Icon icon={'fa-money-bill-wave'} color={'#3C4860'} className={"mr-2"}/>
                  <span className="bg-info">$ 105.000.000</span>
            </span>
            <div className="config">
                <Icon icon={'fa-bell'} className={"ml-3 notification"} size={20}
                      onClick={() => setAsideShow(!asideShow)}
                />
                <Icon icon={'fa-cog'} className={"ml-3"} size={20}
                      onClick={() => setAsideShow(!asideShow)}
                />
            </div>
        </div>
    </header>
);
