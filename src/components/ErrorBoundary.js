import React, { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    // Use this lifecycle method to trigger when there is n error in order to change
    // the hasError state to true which will then display the error message
    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }

    render() {
       if (this.state.hasError) {
        return <h1>Oooooops. That is not good.</h1>
       }
       return this.props.children
    }
}

export default ErrorBoundary;