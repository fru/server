const express = require('express');
const app = express();
const port = 4005;
const { exec } = require('child_process');

app.post('/pull', (req, res) => {
  exec('git pull', (err, stdout, stderr) => {
   // handle err, stdout & stderr
    res.send('12345 test' + stdout + stderr);
  });
  
});

const server = app.listen(port, () => {
  console.log('Server is running on port ' + port);
});

module.exports = server;
