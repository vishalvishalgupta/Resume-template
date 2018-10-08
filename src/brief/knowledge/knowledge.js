import React from 'react'
import {Technologies} from "./technologies";
import {Paradigms} from "./paradigms";
import './knowledge.scss';

export class Knowledge extends React.Component {

    static defaultProps = {
        className: 'knowledge',
        labelClassName: 'knowledge-label',
    };

    render() {

        const {
            value: {
                technologies,
                paradigms,
            },
            className,
            labelClassName
        } = this.props;

        return (
            <div className={className}>

                <Technologies value={technologies}
                              labelClassName={labelClassName}
                />

                <Paradigms value={paradigms}
                           labelClassName={labelClassName}
                />
                
            </div>
        );
    }
}