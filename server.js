// server.js
const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));

});

app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`);
});
