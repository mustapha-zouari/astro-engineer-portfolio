import { educationList } from './biography/education';
import { experienceList } from './biography/experience';

export interface CareerHighlight {
    category: string;
    icon: string;
    values: { title: string; subtitle: string; fromDate: string; toDate: string }[];
}

const educationHighlights = educationList.map((education) => ({
    title: education.university,
    subtitle: education.degree,
    fromDate: education.fromYear,
    toDate: education.toYear,
}));

const experienceHighlights = experienceList.map((experience) => ({
    title: experience.title,
    subtitle: experience.team,
    fromDate: experience.fromYear,
    toDate: experience.toYear,
}));

export const homeData = {
    hero: {
        heading: 'Welcome to My Portfolio',
        tagline:
            'I design and build reliable web platforms, developer tools, and product experiences.',
    },
    biographyPreview: {
        heading: 'About Me',
        ctaLabel: 'Read Full Biography',
        resume: `
    Product-minded software engineer with experience building reliable web applications,
    improving delivery workflows, and designing maintainable systems.
    I enjoy turning complex requirements into simple interfaces and sharing practical
    engineering lessons through writing.
`,
    },
    careerHighlights: [
        {
            category: 'Education',
            icon: '🎓',
            values: educationHighlights,
        },
        {
            category: 'Experience',
            icon: '💼',
            values: experienceHighlights,
        },
    ] satisfies CareerHighlight[],
};
