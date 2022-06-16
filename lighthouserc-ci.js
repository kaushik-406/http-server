module.exports = {
  ci: {
    collect: {
      url: ["https://http-web-server.herokuapp.com"],
      startServerCommand: "rails server -e production",
    },
    asserts:{
      assertions:{
        'categories:performance':['error',{minScore:.6}],
        'categories:accessibility':['error',{minScore:.6}],
        'categories:best-practices':['error',{minScore:.6}],
        'categories:seo':['error',{minScore:.6}],
        'categories.pwa':'off',
      }
    },
    upload: {
      target: "temporary-public-storage",
      serverBaseUrl: "https://http-web-server.herokuapp.com",
      token: "LIGHTHOUSE_APP_TOKEN", // could also use LHCI_TOKEN variable instead
    },
  },
};
