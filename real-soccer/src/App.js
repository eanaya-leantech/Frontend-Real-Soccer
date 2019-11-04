import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Grid} from "@material-ui/core";

import ErrorBoundary from "./components/ErrorBoundary";
import Routes from "./pages/Routes";
import './index.scss';

export const App = () => {
    return (
        <ErrorBoundary>
            <BrowserRouter>
                <div className={'root'}>
                    <Routes/>
                </div>
            </BrowserRouter>
        </ErrorBoundary>
    );
};


