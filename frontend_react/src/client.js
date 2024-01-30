import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: 'y11cersy',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: process.env.REACT__APP__SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);