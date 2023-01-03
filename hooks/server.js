const express = require('express');
const app = express();
const port = 4005;

app.post('/pull', (req, res) => {
  console.log('API was successfully requested');
  res.send('12345 test');
});

const server = app.listen(port, () => {
  console.log('Server is running on port ' + port);
});

module.exports = server;
