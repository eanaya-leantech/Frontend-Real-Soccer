import React, {Suspense} from 'react';
import {Switch, Route} from "react-router-dom";

import {Loading} from '../../components/Loading';

const Home = React.lazy(() => import("../../pages/Home"));
const Teams = React.lazy(() => import("../../pages/Teams"));


export const Routes = () => (
    <Suspense fallback={<Loading/>}>
        <Switch>
            <Route exact path={'/'} component={Home}/>
            <Route path={'/teams'} component={Teams}/>
        </Switch>
    </Suspense>
);
