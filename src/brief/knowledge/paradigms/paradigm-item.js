import React from 'react';
import './paradigm-item.scss';

export class ParadigmItem extends React.Component {

    static defaultProps = {
        className: 'paradigm-item',
    };

    static getKey = (item) => {
        return item;
    };

    render() {
        const {value, className} = this.props;
        return (
            <div className={className}>{value}</div>
        );
    }
}