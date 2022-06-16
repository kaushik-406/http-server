module.exports = {
  ci: {
    collect: {
      url: ["https://http-web-server.herokuapp.com"],
      startServerCommand: "rails server -e production",
    },
    upload: {
      target: "temporary-public-storage",
      serverBaseUrl: "https://http-web-server.herokuapp.com",
      token: "LIGHTHOUSE_APP_TOKEN", // could also use LHCI_TOKEN variable instead
    },
  },
};
