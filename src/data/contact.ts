import { siteConfig } from './site';

export interface ContactLink {
    label: string;
    uri: string;
    icon: string;
    value: string;
}

export const contactData = {
    heading: 'Contact Me',
    rightsLabel: 'All rights reserved.',
    links: [
        {
            label: 'Email',
            uri: 'mailto:first.last@example.com',
            icon: '✉',
            value: 'first.last@example.com',
        },
        {
            label: 'Phone',
            uri: 'tel:+15550101010',
            icon: '☎',
            value: '+1 555 010 1010',
        },
        {
            label: 'LinkedIn',
            uri: 'https://www.linkedin.com/in/example-engineer/',
            icon: 'in',
            value: siteConfig.fullName,
        },
        {
            label: 'GitHub',
            uri: 'https://github.com/example-engineer',
            icon: '{}',
            value: 'example-engineer',
        },
        {
            label: 'Calendly',
            uri: 'https://calendly.com/example-engineer/30min',
            icon: '📅',
            value: 'Schedule a Meeting',
        },
    ] satisfies ContactLink[],
};
