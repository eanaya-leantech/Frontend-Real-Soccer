import React, {Suspense} from 'react';
import {Switch, Route} from "react-router-dom";

import Loading from '../../components/Loading';

const Matches = React.lazy(() => import("../Matches"));
const MyTeam = React.lazy(() => import("../MyTeam"));
const NotFound = React.lazy(() => import('../Errors/NotFound'));

const Routes = () => (
    <Switch>
        <Suspense fallback={<Loading/>}>
            <Route exact path={'/'} component={MyTeam}/>
            <Route path={'/matches'} component={Matches}/>
            <Route path={'/store'} component={NotFound}/>
            <Route path={'/uniforms'} component={NotFound}/>
            <Route path={'/trophy'} component={NotFound}/>
            <Route path={'/gym'} component={NotFound}/>
            <Route path={'/friends'} component={NotFound}/>
            <Route path={'/analytics'} component={NotFound}/>
        </Suspense>
    </Switch>
);

export default Routes;
