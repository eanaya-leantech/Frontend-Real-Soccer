import React from 'react';
import {Switch, Route} from "react-router-dom";
import {Home} from "./pages/Home";

export const Routes = () => (
    <Switch>
        <Route path={'/'} component={Home}/>
    </Switch>
);
