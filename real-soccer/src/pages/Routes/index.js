import React, {Suspense} from 'react';
import {Switch, Route} from "react-router-dom";

import Loading from '../../components/Loading';
import login from '../Auth/login';
import PrivateRoute from './PrivateRoute';

const Matches = React.lazy(() => import("../Matches"));
const MyTeam = React.lazy(() => import("../MyTeam"));
const NotFound = React.lazy(() => import('../Errors/NotFound'));
const PermissionDenied = React.lazy(() => import('../Errors/PermissionDenied'));
const ServerError = React.lazy(() => import('../Errors/ServerError'));
const Register = React.lazy(() => import("../Register"));
const ForgotPassword = React.lazy(() => import("../Auth/ForgotPassword"));
const ResetPassword = React.lazy(() => import("../Auth/ResetPassword"));


const Routes = () => (
    <Suspense fallback={<Loading/>}>
        <Switch>
            <Route path={'/register'} component={Register}/>
            <Route path={'/login'} component={login}/>
            <Route path={'/forgotpassword'} component={ForgotPassword}/>
            <Route path={'/resetpassword'} component={ResetPassword}/>
            <PrivateRoute exact path={'/'} component={MyTeam}/>
            <PrivateRoute path={'/matches'} component={Matches}/>
            <PrivateRoute path={'/store'} component={NotFound}/>
            <PrivateRoute path={'/uniforms'} component={ServerError}/>
            <PrivateRoute path={'/trophy'} component={PermissionDenied}/>
            <PrivateRoute path={'/gym'} component={NotFound}/>
            <PrivateRoute path={'/friends'} component={NotFound}/>
            <PrivateRoute path={'/analytics'} component={NotFound}/>
            <Route component={NotFound}/>
        </Switch>
    </Suspense>
);

export default Routes;
