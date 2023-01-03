module.exports = {
  apps : [{
    name   : "hooks",
    script : "./server.js",
    "watch": true,
    "watch_options": {
      "followSymlinks": false,
      "usePolling": true
    }
  }]
}
