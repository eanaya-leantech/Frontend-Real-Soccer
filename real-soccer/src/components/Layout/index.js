import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Header from "./header";
import Menu from "./menu";
import Footer from "./footer";

import './styles.scss';


const Layout = ({children}) => {
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
};

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;
