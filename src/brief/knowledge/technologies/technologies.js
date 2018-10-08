import React from 'react';

import {TechnologyItem} from "./technology-item";
import {LabeledList} from "Common";
import './technologies.scss';

export class Technologies extends React.Component {

    static defaultProps = {
        className: 'technologies',
        listClassName: 'tech-container',
    };

    render() {

        const {
            value: {
                label = 'Technologies',
                items
            },
            className,
            listClassName,
            labelClassName
        } = this.props;

        return (
            <LabeledList items={items}
                         label={label}
                         ItemComponent={TechnologyItem}
                         className={className}
                         labelClassName={labelClassName}
                         listClassName={listClassName}
            />
        );
    }
}