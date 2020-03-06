module.exports = {
  siteMetadata: {
    title: `Patrick Daus`,
    description: `Patrick Daus is a software developer in the Madison, WI area currently specializing in React development. Here you can see examples of his work, resume and contact information.`,
    author: `@dausp`,
  },
  plugins: [
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
        name: `pat-daus-portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
		},
		`gatsby-plugin-styled-jsx`
  ],
}
