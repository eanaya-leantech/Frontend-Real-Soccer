import React, {Component} from 'react';

export class ErrorBoundary extends Component {
    state = {
        error: null,
        errorInfo: null
    };

    componentDidCatch(error, errorInfo) {
        this.setState({
            error,
            errorInfo
        });
    };

    render() {

        const RenderError = () => {
            return (
                <>
                    <p>{this.state.error && this.state.error.toString()}</p>
                    <h1>{this.state.errorInfo.componentStack}</h1>
                </>

            );
        };

        return (
            <>
                {this.state.errorInfo ? <RenderError/> : this.props.children}
            </>
        )
    }
}
