import React, {useState} from 'react';
import {Header} from "./header";
import {Menu} from "./menu";
import {Footer} from "./footer";

import './styles.scss';
import {Aside} from "./aside";

export const Layout = ({children}) => {
    const [menuShow, setMenuShow] = useState(false);
    const [asideShow, setAsideShow] = useState(false);
    return (
        <div>
            <Header
                setMenuShow={setMenuShow}
                menuShow={menuShow}
                asideShow={asideShow}
                setAsideShow={setAsideShow}
            />
            <main className={`main ${menuShow ? 'show-menu' : ''}`}>
                <Menu/>
                <div className="content">
                    {children}
                    <Footer/>
                </div>
            </main>
            <Aside show={asideShow} setShow={setAsideShow}/>
        </div>
    )
};
