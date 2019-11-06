import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

/**
 * this component render a green or red light depending the of the state of the application
 * @param {string} currentState this param represent the current state of the app
 */

function StateIndicator({currentState}) {
    return (
        <span className={`state ${currentState}`} />
    )
}

StateIndicator.propTypes = {
    currentState: PropTypes.oneOf(['active', 'unactive'])
}

export default StateIndicator 