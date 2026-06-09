import type { ProfessionalExperience } from './types';

export const experienceList: ProfessionalExperience[] = [
    {
        fromYear: '2023',
        toYear: 'Present',
        title: 'Senior Software Engineer',
        enterprise: 'Acme Cloud',
        icon: 'company-placeholder.svg',
        team: 'Platform Team',
        tasks: [
            'Designed reusable service patterns for customer-facing product teams',
            'Improved deployment reliability through better observability and release checks',
            'Mentored engineers on code quality, testing strategy, and technical design reviews',
        ],
        keyWords: ['TypeScript', 'Architecture', 'Observability', 'Mentoring'],
    },
    {
        fromYear: '2020',
        toYear: '2023',
        title: 'Full-Stack Engineer',
        enterprise: 'Northstar Labs',
        icon: 'company-placeholder.svg',
        team: 'Product Engineering',
        tasks: [
            'Built responsive product workflows with Astro, React, and typed APIs',
            'Created integration tests for core user journeys and payment flows',
            'Partnered with product and design to simplify complex operational screens',
        ],
        keyWords: ['Astro', 'React', 'Node.js', 'Testing'],
    },
    {
        fromYear: '2018',
        toYear: '2020',
        title: 'Frontend Developer',
        enterprise: 'Bright Apps',
        icon: 'company-placeholder.svg',
        team: 'Growth Team',
        tasks: [
            'Implemented accessible landing pages, dashboards, and onboarding screens',
            'Maintained a shared component library used across multiple product surfaces',
            'Optimized page performance and improved Core Web Vitals metrics',
        ],
        keyWords: ['Accessibility', 'Design Systems', 'Performance'],
    },
];
