module.exports = {
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `b9jnb0vx6h6g`,
        accessToken: `6-AXNMY3uoGF3UCBIAMKd6gPLbsCmfVspznMPvjE_pQ`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`
      }
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`en`, `de`, `fr`, `it`],
        defaultLanguage: `de`,
        siteUrl: `http://localhost:8000/`,
        i18nextOptions: {
          interpolation: {
            escapeValue: false 
          },
          keySeparator: false,
          nsSeparator: false
        }
      }
    }
  ],
  pathPrefix: "/homepage",
};
