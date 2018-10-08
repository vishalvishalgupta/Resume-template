import React from 'react';

import {Experience} from "./experience";
import {Education} from "./education";
import './details.scss';

export class Details extends React.Component {

    static defaultProps = {
        className: 'details',
        labelClassName: 'details-label-main'
    };

    render() {

        const {
            value: {
                experience,
                education
            },
            className,
            labelClassName
        } = this.props;

        return (
            <main className={className}>
                <Experience value={experience} mainLabelClassName={labelClassName}/>
                <Education value={education} mainLabelClassName={labelClassName}/>
            </main>
        );
    }
}
