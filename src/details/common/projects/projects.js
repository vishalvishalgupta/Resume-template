import React from 'react';
import './projects.scss';
import {Project} from "./project";

export class Projects extends React.Component {

    static defaultProps = {
        className: 'projects'
    };

    render() {
        const {value, className} = this.props;

        if (value === null || typeof value === 'undefined') {
            return null;
        }

        const {items} = value;

        return (
            <div className={className}>
                {items.map(this.renderProject)}
            </div>
        );
    }

    renderProject = (item) => {
        return (
            <Project value={item} key={item.name}/>
        )
    };
}