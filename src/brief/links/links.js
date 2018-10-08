import React from 'react'
import {Link} from "./link";
import './links.scss';

import {List} from 'Common';

export class Links extends React.Component {

    static defaultProps = {
        className: 'brief-links'
    };

    render() {
        const {value, className} = this.props;

        return (
          <List className={className}
                items={value}
                ItemComponent={Link}
          />
        );
    }
}