import React, {Suspense} from 'react';
import {Switch, Route} from "react-router-dom";

import Loading from '../../components/Loading';
import login from '../login';

const Home = React.lazy(() => import("../Home"));
const Teams = React.lazy(() => import("../Teams"));


const Routes = () => (
    <Switch>
        <Suspense fallback={<Loading/>}>
            <Route exact path={'/'} component={Home}/>
            <Route path={'/teams'} component={Teams}/>
            <Route path={'/login'} component={login}/>
        </Suspense>
    </Switch>
);

export default Routes;
