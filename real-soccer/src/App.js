import React from 'react';
import {BrowserRouter} from "react-router-dom";

import {ErrorBoundary} from "./components/ErrorBoundary";
import {Routes} from "./components/Routes";

import './index.scss';

export const App = () => {
    return (
      <ErrorBoundary>
          <BrowserRouter>
              <Routes/>
          </BrowserRouter>
      </ErrorBoundary>
    );
};
