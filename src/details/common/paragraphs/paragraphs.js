import React from 'react';
import './paragraphs.scss';

export class Paragraphs extends React.Component {

    static defaultProps = {
        className: 'paragraphs'
    };

    render() {
        const {value, className} = this.props;

        return (
            <div className={className}>
                {value.map(this.renderParagraph)}
            </div>
        );
    }

    renderParagraph = (item, index) => {

        let content;

        if (item.constructor !== Array) {
            content = item.toString();
        } else {
            content = item.map(this.renderLines);
        }

        return (
            <p key={index}>
                {content}
            </p>
        );
    };

    renderLines = (item, index) => {
        return (
            <React.Fragment key={index}>
                {item.toString()}
                <br/>
            </React.Fragment>
        );
    };
}