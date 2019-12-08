require(`dotenv`).config({
  path: `.env`,
})

const CONST_description = `Problems, solutions, hacks and interesting tools I come across everyday in my software engineering career.`;
const CONST_headline = `node_modules ﹣ A tech blog by Dani Akash`;

module.exports = {
  siteMetadata: {
    siteTitle: `node_modules`,
    siteTitleAlt: CONST_headline,
    siteHeadline: CONST_headline,
    siteUrl: `https://nodemodules.xyz`,
    siteDescription: CONST_description,
    siteLanguage: `en`,
    siteImage: `/logo.png`,
    author: `DaniAkash`,
    navigation: [
      {
        title: `Blog`,
        slug: `/blog`,
      },
      {
        title: `About`,
        slug: `/about`,
      },
    ],
    externalLinks: [
      {
        name: `Twitter`,
        url: `https://twitter.com/dani_akash_`,
      },
      {
        name: `Instagram`,
        url: `https://www.instagram.com/dani_akash_`,
      },
    ],
    showLineNumbers: true,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: CONST_headline,
        short_name: `node_modules`,
        description: CONST_description,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/logo.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/logo.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}
