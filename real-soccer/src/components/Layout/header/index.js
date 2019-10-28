import React, {useState} from 'react';
import './styles.scss';
import Icon from "../../Icon";
import Aside from "../aside";

const Header = ({setMenuShow, menuShow}) => {

    const [showNotifications, setShowNotifications] = useState(false);
    const [showSetting, setShowSetting] = useState(false);

    return (
        <>
            <header className="header">
                <span className='icon'>
                    <Icon className={'fa-bars'} pointer
                          onClick={() => setMenuShow(!menuShow)}
                    />
                </span>
                <h1 className="title">
                    Real Soccer
                    <Icon size={22} className={'fa-running ml-1'}/>
                    <Icon size={10} className={'fa-futbol'}/>
                </h1>
                <div className="info">
                    <span className="money">
                         <Icon className={'fa-money-bill-wave mr-2'} color={'#3C4860'}/>
                          <span>$ 105.000.000</span>
                    </span>
                    <div className="config">
                        <Icon className={'fa-bell ml-3 notification'} pointer
                              onClick={() => setShowNotifications(!showNotifications)}

                        />
                        <Icon className={"fa-cog ml-3"} pointer
                              onClick={() => setShowSetting(!showSetting)}
                        />
                    </div>
                </div>
            </header>
            <Aside show={showNotifications}
                   setShow={setShowNotifications}>
                <div>
                    aqui debe mostrar las notificaciones
                </div>
            </Aside>
            <Aside show={showSetting}
                   setShow={setShowSetting}>
                <div>
                    aqui debe mostrar los mensajes
                </div>
            </Aside>
        </>
    )
};

export default Header;
