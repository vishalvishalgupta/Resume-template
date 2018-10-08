import React from 'react';
import {List} from "./list";

export class LabeledList extends React.Component {

    static defaultProps = {
        className: 'labeled-list',
        labelClassName: 'label',
        listClassName: 'item-container',
    };

    render() {

        const {
            label,
            className,
            labelClassName,
            listClassName,
            ...listProps
        } = this.props;

        return (
            <div className={className}>
                <div className={labelClassName}>
                    {label}
                </div>
                <List {...listProps}
                      className={listClassName}
                />
            </div>
        );
    }
}