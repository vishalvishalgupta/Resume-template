import React from "react";
import './technology-item.scss';

export class TechnologyItem extends React.Component {

    static defaultProps = {
        nameClassName: 'technology-name',
        valueClassName: 'technology-value',
        evenClassName: 'technology-even',
        oddClassName:'technology-odd'
    };

    static getKey = ({name}) => {
        return name;
    };

    render() {

        const {
            value: {
                name,
                value,
            },
            index,
            nameClassName,
            valueClassName,
            evenClassName,
            oddClassName,
        } = this.props;

        const even = index % 2 === 0;
        const parityClassName = even ? evenClassName : oddClassName;

        return (
            <React.Fragment>
                <div className={`${nameClassName} ${parityClassName}`}>{name}</div>
                <div className={`${valueClassName} ${parityClassName}`}>{value}</div>
            </React.Fragment>
        );
    }
}