import React from "react";
import './experience-item.scss';
import {Paragraphs, TechStack} from "DetailsCommon";

export class ExperienceItem extends React.Component {

    static defaultProps = {
        className: 'experience-item',
        titleClassName: 'title',
        durationClassName: 'duration',
        companyClassName: 'company',
    };

    static getKey = ({title, company}) => {
        return title + company;
    };

    render() {

        const {
            value: {
                title,
                startDate,
                endDate,
                company,
                paragraphs,
                techStack,
            },
            ongoingText = 'Present',
            dateDelimiter=' - ',
            className,
            titleClassName,
            durationClassName,
            companyClassName
        } = this.props;

        const duration = `${startDate} ${dateDelimiter} ${typeof endDate !== 'undefined' ? endDate : ongoingText}`;

        return (
            <div className={className}>
                <div className={titleClassName}>{title}</div>
                <div className={durationClassName}>{duration}</div>
                <div className={companyClassName}>{company}</div>
                <Paragraphs value={paragraphs}/>
                <TechStack value={techStack}/>
            </div>
        );
    }
}