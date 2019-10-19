import React from 'react';
import {BrowserRouter} from "react-router-dom";

import {ErrorBoundary} from "./components/ErrorBoundary";
import {Routes} from "./Routes";

import './index.css';

export const App = () => {
    return (
      <ErrorBoundary>
          <BrowserRouter>
              <Routes/>
          </BrowserRouter>
      </ErrorBoundary>
    );
};

