const path = require("path")

module.exports = {
  siteMetadata: {
    title: `The Donut Bar`,
    description: `The Donut Bar is located in the heart of downtown Fredericton (A.K.A Freddy Beach). We are dedicated to delivering fresh-to-death gourmet donuts, and take pride in being the very first donut bar in the area.`,
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
  ],
}