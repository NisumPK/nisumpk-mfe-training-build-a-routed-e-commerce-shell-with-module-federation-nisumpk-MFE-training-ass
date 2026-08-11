import React from "react";

class RemoteErrorBoundary extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            hasError: false,
        };


    }

    static getDerivedStateFromError() {
        return {
            hasError: true,
        };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Remote application failed:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (<div> <h2>This page is currently unavailable.</h2> <p>Please try again later.</p> </div>
            );
        }


        return this.props.children;


    }
}

export default RemoteErrorBoundary;
