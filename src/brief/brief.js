import React from 'react';

import {Person} from "./person";
import {Links} from "./links";
import {Knowledge} from "./knowledge";

import './brief.scss';

export class Brief extends React.Component {
    static defaultProps = {
        className: 'brief'
    };

    render() {
        const {
            value: {
                person,
                links,
                knowledge,
            },
            className
        } = this.props;

        return (
            <aside className={className}>
                <Person value={person}/>
                <Links value={links}/>
                <Knowledge value={knowledge}/>
            </aside>
        );
    }
}
