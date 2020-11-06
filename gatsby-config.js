module.exports = {
  plugins: [
    {
      // including a plugin from outside the plugins folder needs the path to it
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        languages: ["en", "cn", "ja", "de", "es", "fr", "ko", "pl", "ru", "vi"],
        defaultLanguage: "en",
        path: `${__dirname}/locales`,
        siteUrl: "app.ens.domains",
        i18nextOptions: {
          debug: true,
          lng: "en",
          fallbackLng: "en",
          whitelist: ["en", "cn", "ja", "de", "es", "fr", "ko", "pl", "ru", "vi"],
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
        },
        pages: [
          {
            matchPath: "/ignored-page",
            languages: ["en", "cn", "ja", "de", "es", "fr", "ko", "pl", "ru", "vi"],
          },
        ],
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Overpass+Mono\:300,400"`,
          `Overpass\:100,200,300,400,500,700,800,900`,
          `Karma: 400,300,200,100`,
        ],
      },
    },
    {
      // including a plugin from outside the plugins folder needs the path to it
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        languages: ["en"],
        defaultLanguage: "en",
        path: `${__dirname}/locales`,
        siteUrl: "app.ens.domains",
        i18nextOptions: {
          debug: true,
          lng: "en",
          fallbackLng: "en",
          whitelist: ["en", "cn", "ja", "de", "es", "fr", "ko", "pl", "ru", "vi"],
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
        },
        pages: [
          {
            matchPath: "/ignored-page",
            languages: ["en"],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-101611202-2",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: [],
      },
    },
  ],
}
