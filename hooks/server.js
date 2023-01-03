const express = require('express');
const app = express();
const port = 4005;
const { exec } = require('child_process');

app.get('/hook-deploy', (req, res) => {
  exec('bash ./4-on-hook-deploy.sh &', (err, stdout, stderr) => {
    res.send('V1: ' + stdout + stderr);
  });
});

app.get('/test12', (req, res) => {
  res.send('Not final :-( 1,2,3,4,5,6,7,');
});

const server = app.listen(port, () => {
  console.log('Server is running on port ' + port);
});

module.exports = server;
