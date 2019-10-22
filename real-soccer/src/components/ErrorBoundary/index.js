import React, {Component} from 'react';

export class ErrorBoundary extends Component {

    state = {
        hasError: false
    };

    static getDerivedStateFromError(error) {
        return {hasError: true}
    }

    componentDidCatch(error, errorInfo) {
        console.error(error, errorInfo)
    };

    render() {
        if (this.state.hasError) {
            return <h1>Algo salio mal ... :(</h1>
        }

        return this.props.children;
    }
}