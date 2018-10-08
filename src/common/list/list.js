import React from 'react';

export class List extends React.Component {

    static defaultProps = {
        className: 'item-container',
    };

    render() {

        const {
            items,
            className,
        } = this.props;

        return (
            <ul className={className}>
                {items.map(this.renderItem)}
            </ul>
        );
    }

    renderItem = (item, index) => {

        const {ItemComponent, itemProps} = this.props;

        return (
            <ItemComponent {...itemProps}
                           key={ItemComponent.getKey(item)}
                           value={item}
                           index={index}
            />
        );
    };
}