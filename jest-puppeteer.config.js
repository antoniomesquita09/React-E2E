module.exports = {
    launch: {
      dumpio: true,
      headless: true
    },
    browser: 'chromium',
    browserContext: 'default',
    server: {
      command: `yarn start`,
      port: 3000,
      launchTimeout: 10000,
      debug: true,
    },
  }