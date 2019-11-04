import React, {useState} from 'react';
import PropTypes from 'prop-types';
import ImageNotDraggable from "../../ImageNotDraggable";
import Text from "../../Text/Text";
import './styles.scss';

const Header = ({show, setShow}) => {
    return (
            <header className="header">
                <div className='icon'>
                    <ImageNotDraggable width={'22px'} cursor={'pointer'} image={'BARS'}
                                       onClick={() => setShow(!show)}
                    />
                </div>
                <div className="title">
                    <Text component={'h1'} fontSize={'20px'} className={' title-text '}>
                        Real Soccer
                    </Text>
                    <ImageNotDraggable width={'28px'} image={'LOGO'}/>
                </div>
                <div className="info">
                    <span className="money">
                          <ImageNotDraggable width={'22px'} image={'MONEY_BILL_WAVE'} className="money-icon"/>
                          <Text component={'span'} className={' money-text'}>
                            $ 105.000.000
                          </Text>
                    </span>
                    <div className="config">
                        <ImageNotDraggable width={'22px'} image={'BELL_SOLID'}/>
                        <ImageNotDraggable width={'22px'} image={'COG'}/>
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
