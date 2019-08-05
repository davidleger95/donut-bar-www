const path = require("path")

module.exports = {
  siteMetadata: {
    title: `The Donut Bar`,
    seoTitle: `The Donut Bar - Fredericton`,
    description: `The Donut Bar is located in the heart of downtown Fredericton (A.K.A Freddy Beach). We are dedicated to delivering fresh-to-death gourmet donuts, and take pride in being the very first donut bar in the area.`,
    keywords: `donut, bar, fredericton, freddy, donut bar`,
    siteUrl: `https://donut-bar.davidleger.me`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        root: path.join(__dirname, "src"),
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Donut Bar`,
        short_name: `The Donut Bar`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // Google Analytics Tracking ID
        trackingId: "UA-68783928-8",
        // GDPR stuff (better to be safe)
        anonymize: true,
        // Do not track
        respectDNT: true,
      },
    },
    "gatsby-plugin-sitemap",
  ],
}
