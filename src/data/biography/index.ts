import { educationList } from './education';
import { experienceList } from './experience';
import { expertiseList } from './expertise';
import { interests, languages } from './extras';
import { biographyProfile } from './profile';

export const biographyData = {
    profile: biographyProfile,
    experienceList,
    educationList,
    expertiseList,
    extras: {
        languages,
        interests,
    },
};
