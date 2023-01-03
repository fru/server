const express = require('express');
const app = express();
const port = 4005;
const { exec } = require('child_process');

app.get('/hook-deploy', (req, res) => {
  exec('bash ./on-hook-deploy.sh', (err, stdout, stderr) => {
   // handle err, stdout & stderr
    res.send('V1: ' + stdout);
  });
  
});

const server = app.listen(port, () => {
  console.log('Server is running on port ' + port);
});

module.exports = server;
