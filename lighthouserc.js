module.exports = {
    ci: {
      collect: {
        startServerCommand: 'npm run start',
        numberOfRuns: 3,
        url: ['https://http-web-server.herokuapp.com']
      },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  };