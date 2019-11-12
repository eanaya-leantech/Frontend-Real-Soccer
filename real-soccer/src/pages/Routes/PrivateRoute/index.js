import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const auth = localStorage.getItem('token');
export default ({component: Component, ...rest}) => {
    return <Route {...rest} render={(props) => (auth ? <Component {...props}/> : <Redirect to={'/login'}/>)}/>
};
