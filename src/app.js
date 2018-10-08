import React, {Component} from 'react';
import './app.scss';

import {Brief} from "./brief";
import {Details} from "./details";

class App extends Component {

    static defaultProps = {
        className: 'cv',
        errorClassName: 'cv-load-error',
        loadingClassName: 'cv-loading',
        loadingContent: 'Loading ...'
    };

    state = {};

    componentDidCatch = (error, errorInfo) => {
        this.setState({error, errorInfo});
    };

    componentDidMount = () => {
        (fetch('http://localhost:3000/cv.json')
            .then(response => response.json())
            .then(value => this.setState({value}))
            .catch(error => {
                this.setState({error})
            }));
    };

    render() {

        const {
            className,
            errorClassName,
            loadingClassName,
            loadingContent
        } = this.props;

        const {
            value,
            error,
            errorInfo = ''
        } = this.state;

        if (typeof error !== "undefined") {
            return (
                <div className={errorClassName}>
                    {`${error.toString()}\r\n\r\n${errorInfo.toString()}`}
                </div>
            );
        }

        if (typeof value === 'undefined') {
            return (
                <div className={loadingClassName}>
                    {loadingContent}
                </div>
            );
        }

        const {
            brief,
            details
        } = value;

        return (
            <div className={className}>
                <Brief value={brief}/>
                <Details value={details}/>
            </div>
        );
    }
}

export default App;
