module.exports = {
  siteMetadata: {
    title: `Interra`,
    description: `Interra veut permettre plus d’interactions entre les personnes récemment arrivées en terre liégeoise et la population locale. Nous voulons créer des opportunités de rencontre de manière participative et innovante`,
    author: `@Interra`,
    language:"fr",
    siteUrl: `https://www.interra-asbl.be/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-minify`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-preload-fonts`,
    'gatsby-plugin-robots-txt',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        "accessToken": "p80WLxedAVZy48yZ_h7yEnxJYzxlzI-y-tBiKiUERlc",
        "spaceId": "t0kynlkq1wsw"
      }
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'fr'
      }
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-open-graph-images`,      
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },

    

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Oxygen`,
          `Roboto` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },

    {
      resolve: `gatsby-source-datocms`,
      options: {
        // You can find your read-only API token under the Settings > API tokens
        // section of your administrative area. Make sure to grant both CDA and CMA permissions.
        apiToken: `70922149b5b6ab9f2cbf4f2a23171a`,
  
        // The project environment to read from. Defaults to the primary environment:
        environment: `main`,
  
        // If you are working on development/staging environment, you might want to
        // preview the latest version of records instead of the published one:
        previewMode: false,
  
        // Disable automatic reloading of content when some change occurs on DatoCMS:
        disableLiveReload: false,
  
        // Custom API base URL (most don't need this)
        // apiUrl: 'https://site-api.datocms.com',
  
        // Setup locale fallbacks
        // In this example, if some field value is missing in Italian, fall back to English
        localeFallbacks: {
          it: ['fr'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Interra`,
        short_name: `Interra`,
        start_url: `/`,
        //background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/interra-logo-300x300-removebg.png`, // This path is relative to the root of the site.
      },
    },
   

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  
}

