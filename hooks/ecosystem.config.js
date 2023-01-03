module.exports = {
  apps: [{
    name: "hooks",
    script: "./hooks/server.js",
    watch: true,
    "watch_options": {
      usePolling: true,
      alwaysStat: true,
      useFsEvents: false
    }
  }]
}
