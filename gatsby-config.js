module.exports = {
  siteMetadata: {
    title: `CodeCutting Recipes`,
    author: `Jake Moening`,
    description: `Learn some of my favorite recipes here.`,
    siteUrl: `http://recipes.codecutting.com`,
  },
  plugins: [
    // Typescript
    `gatsby-plugin-typescript`,
    // PostCSS for tailwind
    `gatsby-plugin-postcss`,
    // Sharp image transformer
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // Helmet for header info
    `gatsby-plugin-react-helmet`,
    // Markdown transformer
    `gatsby-transformer-remark`,
    // Robots.text
    `gatsby-plugin-robots-txt`,
    // Markdown image transformer
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {},
          },
        ],
      },
    },
    // Typography
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // Filesystem sources
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `recipes`,
        path: `${__dirname}/src/recipes/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // Manifest for PWA stuff
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // Include recipe files as pages too (srs/pages is already included by default)
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/recipes/pages`,
      },
    },
    // Google Analytics
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-149347823-1",
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "codecutting.com",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
