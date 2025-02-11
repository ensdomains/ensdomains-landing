let languages = require('./gatsby-config').languages;

exports.createPages = ({ actions }) => {
  if (!Array.isArray(languages)) {
    console.warn('No languages found in gatsby-config.js, defaulting to empty array');
    languages = [];
  }
  
  const { createRedirect } = actions;

  // Get all languages from gatsby-config.js
  const allLanguages = ['', ...languages.map(lang => `/${lang}`)];

  // List of paths that should redirect to /roadmap
  const pathsToRedirect = [
    '/',
    '/governance',
    '/l2-roadmap',
  ];

  // Create redirects for each combination of language and path
  allLanguages.forEach(langPrefix => {
    pathsToRedirect.forEach(path => {
      // Skip if we're trying to redirect /roadmap to itself
      if (path === '/roadmap') return;

      const fromPath = `${langPrefix}${path}`;
      const toPath = `${langPrefix}/roadmap`;

      createRedirect({
        fromPath,
        toPath,
        isPermanent: true,
      });
    });
  });
};
