import { GalleryCertifTypes } from './gallery-certif.types';

export const startInsertGalleryCertif = (data) => ({
    type: GalleryCertifTypes.START_INSERT_GALLERY_CERTIF,
    payload: data
});