import React from 'react';
import {ExperienceItem} from "./experience-item";
import './experience.scss';
import {LabeledList} from "Common";

export class Experience extends React.Component {

    static defaultProps = {
        className: 'experience'
    };

    render() {

        const {
            value: {
                label = 'Experience',
                items,
                ...itemProps
            },
            className,
            mainLabelClassName,
        } = this.props;

        return (
            <section className={className}>
              <LabeledList label={label}
                           items={items}
                           itemProps={itemProps}
                           ItemComponent={ExperienceItem}
                           labelClassName={mainLabelClassName}
              />
            </section>
        );
    }
}