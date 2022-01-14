module.exports = {
  siteMetadata: {
    title: "Steve Kenyon",
    siteUrl: "https://www.stevekenyon.com",
    description: "Steve Kenyon - Musician",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: "images",
      },
    },
    {
      resolve: "gatsby-transformer-sharp",
    },
    {
      resolve: "gatsby-plugin-sharp",
    },
    {
      resolve: "gatsby-plugin-image",
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Steve Kenyon",
        start_url: "/",
        icon: "src/favicon.png",
        crossOrigin: "use-credentials",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Poppins\:400,500,600,700`],
        display: "swap",
      },
    },
  ],
}
