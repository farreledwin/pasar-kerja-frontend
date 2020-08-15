import { createSelector } from 'reselect';

const selectGalleryCertif = (state) => state.gallery_certif;

export const selectAllGalleryTraining = createSelector([selectGalleryCertif],(data) => data.gallery_certif);