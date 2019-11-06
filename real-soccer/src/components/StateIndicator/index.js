import React, {useState} from 'react'
import './styles.scss'
export default function StateIndicator({currentState}) {
    const [state,setState]=useState(currentState)    
    return (
        <span className={`state ${currentState}`} />
    )
}
