import React from 'react';
import {BrowserRouter} from "react-router-dom";

import ErrorBoundary from "./components/ErrorBoundary";
import Routes from "./pages/Routes";

import './scss/index.scss';

export const App = () => {
    return (
      <ErrorBoundary>
          <BrowserRouter>
              <Routes/>
          </BrowserRouter>
      </ErrorBoundary>
    );
};


