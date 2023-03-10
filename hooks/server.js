const express = require('express');
const app = express();
const port = 4005;
const { exec } = require('child_process');

app.get('/hook-deploy', (req, res) => {
  exec('git pull', (err, stdout, stderr) => {
    res.send('V1: ' + stdout + stderr);
  });
});

const server = app.listen(port, () => {
  console.log('Server is running on port ' + port);
});

module.exports = server;
