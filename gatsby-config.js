const languages = [
  "en",
  "cn",
  "ja",
  "de",
  "es",
  "fr",
  "ko",
  "it",
  "nl",
  "pl",
  "vi",
  "ru",
  "pt",
  "tr"
]

module.exports = {
  plugins: [
    {
      // including a plugin from outside the plugins folder needs the path to it
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        languages,
        defaultLanguage: "en",
        path: `${__dirname}/locales`,
        siteUrl: "app.ens.domains",
        i18nextOptions: {
          debug: true,
          lng: "en",
          fallbackLng: "en",
          whitelist: languages,
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
        },
        pages: [
          {
            matchPath: "/ignored-page",
            languages
          },
        ],
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Overpass+Mono\:300,400`,
          `Overpass\:100,200,300,400,500,700,800,900`,
          `Karma: 400,300,200,100`,
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets\/social/
        }
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    }
  ],
}
