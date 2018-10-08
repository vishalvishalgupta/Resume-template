import React from 'react';
import './person.scss';

export class Person extends React.Component {

    static defaultProps = {
        className: 'person',
        headshotClassName: 'headshot',
        nameClassName: 'name',
        titleClassName: 'title',
        mobileClassName: 'mobile',
        skypeClassName: 'skype',
        emailClassName: 'email',
        emailLinkClassName: 'email-link',
        residenceClassName: 'residence'
    };

    render() {

        const {

            value: {
                name,
                title,
                residence,
                mobile,
                email,
                skype,
                headshot:{
                    source:headshotSource,
                    alt:headshotAlt
                },
                preMobile = 'Mobile: ',
                preSkype = 'Skype: '
            },
            className,
            headshotClassName,
            nameClassName,
            titleClassName,
            mobileClassName,
            skypeClassName,
            emailClassName,
            emailLinkClassName,
            residenceClassName,
        } = this.props;

        return (
            <div className={className}>
                <img className={headshotClassName} src={headshotSource} alt={headshotAlt}/>
                <div className={nameClassName}>{name}</div>
                <div className={titleClassName}>{title}</div>
                <address className={residenceClassName}>{residence}</address>
                <div className={mobileClassName}>{`${preMobile}${mobile}`}</div>
                <div className={skypeClassName}>{`${preSkype}${skype}`}</div>
                <div className={emailClassName}>
                    <a className={emailLinkClassName} href={`mailto:${email}`}>{email}</a>
                </div>
            </div>
        );
    }
}