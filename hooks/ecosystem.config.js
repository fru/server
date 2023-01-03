module.exports = {
  apps: [{
    name: "hooks",
    script: "./server.js",
    watch: true,
    "watch_options": {
      usePolling: true,
      alwaysStat: true,
      useFsEvents: false
    }
  }]
}
