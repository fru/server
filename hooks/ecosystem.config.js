module.exports = {
  apps : [{
    name   : "hooks",
    script : "./hooks/server.js",
    "watch": true,
    "watch_options": {
      "followSymlinks": false,
      "usePolling": true
    }
  }]
}
