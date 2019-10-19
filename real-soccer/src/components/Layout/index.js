import React, {useState} from 'react';
import {Header} from "./Header";
import {Menu} from "./Menu";
import {Footer} from "./Footer";


import './styles.css'

export const Layout = ({children}) => {
    const [menuShow, setMenuShow] = useState(false);
    return (
        <div>
            <Header setMenuShow={setMenuShow} menuShow={menuShow}/>
            <main className={`main ${menuShow ? 'show-menu' : ''}`}>
                <Menu/>
                <div className="content">
                    {children}
                    <Footer/>
                </div>
            </main>
        </div>
    )
}