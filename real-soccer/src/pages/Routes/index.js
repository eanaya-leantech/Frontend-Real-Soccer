import React, {Suspense} from 'react';
import {Switch, Route} from "react-router-dom";

import Loading from '../../components/Loading';
import login from '../Auth/login';

const Matches = React.lazy(() => import("../Matches"));
const MyTeam = React.lazy(() => import("../MyTeam"));
const NotFound = React.lazy(() => import('../Errors/NotFound'));
const PermissionDenied = React.lazy(() => import('../Errors/PermissionDenied'));
const ServerError = React.lazy(() => import('../Errors/ServerError'));
const Register = React.lazy(() => import("../Register"));


const Routes = () => (
    <Switch>
        <Suspense fallback={<Loading/>}>
            <Route exact path={'/'} component={MyTeam}/>
            <Route path={'/matches'} component={Matches}/>
            <Route path={'/store'} component={NotFound}/>
            <Route path={'/uniforms'} component={ServerError}/>
            <Route path={'/trophy'} component={PermissionDenied}/>
            <Route path={'/gym'} component={NotFound}/>
            <Route path={'/friends'} component={NotFound}/>
            <Route path={'/analytics'} component={NotFound}/>
            <Route path={'/register'} component={Register}/>
            <Route path={'/login'} component={login}/>
        </Suspense>
    </Switch>
);

export default Routes;
