import React from "react";
import './link.scss';

export class Link extends React.Component {

    static defaultProps = {
        className: 'brief-link',
        linkClassName: 'url',
        imageClassName: 'image'
    };

    static getKey = ({url}) => {
        return url;
    };

    render() {

        const {
            value: {
                url,
                imageSource,
                imageAlt
            },
            className,
            linkClassName,
            imageClassName
        } = this.props;

        return (
            <div className={className}>
                <a href={url} className={linkClassName}>
                    <img src={imageSource} alt={imageAlt} className={imageClassName}/>
                </a>
            </div>
        );
    }
}