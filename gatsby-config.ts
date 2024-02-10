import type { GatsbyConfig } from 'gatsby';
require('dotenv').config({
    path: `.env`,
});

const config: GatsbyConfig = {
    jsxRuntime: `automatic`,
    siteMetadata: {
        siteUrl: 'https://www.skovel.com',
        url: 'https://www.skovel.com',
        title: 'Skovel',
        titleTemplate: 'Skovel – %s',
        description: 'Communiquez avec impact sur votre course.',
        image: '/images/logo.png',
    },
    plugins: [
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Skovel`,
                short_name: `Skovel`,
                start_url: `/`,
                background_color: `#FFFFFF`,
                theme_color: `#FFFFFF`,
                display: `standalone`,
                icon: `static/images/logo.png`,
            },
        },
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-postcss`,
        {
            resolve: `gatsby-plugin-web-font-loader`,
            options: {
                google: {
                    families: [`Inter\:400,500,600,700`],
                },
            },
        },
        {
            resolve: 'gatsby-plugin-google-tagmanager',
            options: {
                id: process.env.GOOGLE_TAG_MANAGER_ID || 'G-XXXXXXXXXX',
                includeInDevelopment: false,
                defaultDataLayer: { platform: 'gatsby' },
                enableWebVitalsTracking: true,
            },
        },
    ],
};

export default config;
