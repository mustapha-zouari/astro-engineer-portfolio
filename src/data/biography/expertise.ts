import type { AreaOfExpertise } from './types';

export const expertiseList: AreaOfExpertise[] = [
    {
        title: 'Backend',
        technologies: [
            { label: 'Node.js', level: 85, icon: 'logos:nodejs-icon' },
            { label: 'Java', level: 75, icon: 'logos:java' },
            { label: 'REST APIs', level: 90, icon: 'mdi:api' },
            { label: 'PostgreSQL', level: 80, icon: 'logos:postgresql' },
        ],
    },
    {
        title: 'Frontend',
        technologies: [
            { label: 'TypeScript', level: 90, icon: 'logos:typescript-icon' },
            { label: 'Astro', level: 85, icon: 'logos:astro-icon' },
            { label: 'React', level: 85, icon: 'logos:react' },
            { label: 'Accessibility', level: 80, icon: 'mdi:human' },
        ],
    },
    {
        title: 'Delivery',
        technologies: [
            { label: 'GitHub Actions', level: 80, icon: 'logos:github-actions' },
            { label: 'Docker', level: 75, icon: 'logos:docker-icon' },
            { label: 'Test Automation', level: 85, icon: 'mdi:robot' },
            { label: 'Monitoring', level: 75, icon: 'mdi:chart-line' },
        ],
    },
];
