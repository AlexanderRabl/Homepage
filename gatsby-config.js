module.exports = {
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-image",
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `q7yoxbh6ny4b`,
        accessToken: `cPcuFc8Yt0M3LzhALQwTR82kWmyo0BmPdXM3V5HNT8I`,
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
        languages: [`en`, `de`],
        defaultLanguage: `en`,
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
  ]
};
