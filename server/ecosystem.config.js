module.exports = {
    apps: [{
      name: "test-server.syd666.com",
      script: "./src/server.js",
      autorestart: true,
      instances: 'max',
      exec_mode: "cluster",
      watch: true,
      env: {
        NODE_ENV: 'development'
      },
      env_staging: {
        NODE_ENV: 'staging'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }]
  };
  