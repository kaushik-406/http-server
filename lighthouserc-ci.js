module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run start",
      numberOfRuns: 3,
      url: ["https://http-web-server.herokuapp.com"],
    },
    asserts: {
      assertions: {
        "categories:performance": ["error", { minScore: 0.6 }],
        "categories:accessibility": ["error", { minScore: 0.6 }],
        "categories:best-practices": ["error", { minScore: 0.6 }],
        "categories:seo": ["error", { minScore: 0.6 }],
        "categories.pwa": "off",
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
