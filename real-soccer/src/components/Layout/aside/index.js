import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Aside = ({children}) => (
    <aside>
        {children}
    </aside>
);

Aside.propTypes = {
    children: PropTypes.element.isRequired
};

export default Aside;
