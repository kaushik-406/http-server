module.exports = {
    ci: {
      collect: {
        url: ['https://http-web-server.herokuapp.com'],
        startServerCommand: 'rails server -e production',
      },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  };