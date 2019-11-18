import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import API from '../../../API';

export default ({component: Component, ...rest}) => {
    return <Route {...rest}
                  render={props =>
                      (API.authService.isAuthenticated()
                              ? <Redirect to={'/'}/>
                              : <Component {...props}/>
                      )
                  }/>
};
