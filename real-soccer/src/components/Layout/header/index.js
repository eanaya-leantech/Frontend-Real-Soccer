import React from 'react';
import PropTypes from 'prop-types';
import {IconButton } from "@material-ui/core";
import ImageNotDraggable from "../../ImageNotDraggable";
import Text from "../../Text/Text";
import './styles.scss';

const Header = ({show, setShow}) => {
    return (
            <header className="header">
                <div className='icon'>
                <IconButton   onClick={() => setShow(!show)}>
                    <ImageNotDraggable width={'22px'} cursor={'pointer'} image={'BARS'}

                    />
                </IconButton >
                </div>
                <div className="title">
                    <Text component={'h1'} fontSize={'20px'} className={' title-text '}>
                        Real Soccer
                    </Text><ImageNotDraggable width={'28px'} image={'LOGO'}/>
                </div>
                <div className="info">
                    <span className="money">
                          <ImageNotDraggable width={'22px'} image={'MONEY_BILL_WAVE'} className="money-icon"/>
                          <Text component={'span'} className={' money-text'}>
                            $ 105.000.000
                          </Text>
                    </span>
                    <div className="config">
                        <IconButton >
                            <ImageNotDraggable width={'22px'} image={'BELL_SOLID'}/>
                        </IconButton>
                        <IconButton >
                            <ImageNotDraggable width={'22px'} image={'COG'}/>
                        </IconButton>
                    </div>
                </div>
            </header>
    )
};

Header.propTypes = {
    show: PropTypes.bool.isRequired,
    setShow: PropTypes.func
};

export default Header;
