import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Box, Grid} from "@material-ui/core";

import Header from "./header";
import Footer from "./footer";
import Menu from "./menu";

import './styles.scss';


const Layout = ({children}) => {
    const [show, setShow] = useState(false);
    return (
        <Grid container alignItems={'center'} justify={'center'} className='app'>
            <Grid item className={`layout ${show && 'show'}`} >
                <Header show={show} setShow={setShow}/>
                <Grid container className='layout-app'>
                    <Grid item className={'layout-menu'}>
                        <Menu show={show}/>
                    </Grid>
                    <Grid item className={'layout-main'}>
                        <Grid className={'content'} container justify={'center'}>
                            {children}
                        </Grid>
                        <Footer/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};

Layout.propTypes = {
    children: PropTypes.element.isRequired
};

export default Layout;
