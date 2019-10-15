import React from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom";

import {Home} from "./pages/Home";

import './index.css';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/'} component={Home}/>
      </Switch>
    </BrowserRouter>
  );
};

