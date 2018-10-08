import React from 'react';

import {ParadigmItem} from "./paradigm-item";
import {LabeledList} from "Common";
import "./paradigms.scss";

export class Paradigms extends React.Component {

    static defaultProps = {
        className: 'paradigms',
        listClassName:'paradigm-container'
    };

    render(){
        const {
            value: {
                label = 'Paradigms',
                items
            },
            className,
            listClassName,
            labelClassName
        } = this.props;

        return (
            <LabeledList items={items}
                         label={label}
                         ItemComponent={ParadigmItem}
                         className={className}
                         labelClassName={labelClassName}
                         listClassName={listClassName}
            />
        );
    }
}