import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import API from '../../../API';

export default ({component: Component, ...rest}) => {
    return <Route {...rest}
                  render={props =>
                      (API.authService.isAuthenticated()
                              ? <Component {...props}/>
                              : <Redirect to={'/login'}/>
                      )
                  }/>
};
