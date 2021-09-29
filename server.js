const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (_req, res) => {
  res.sendFile(
    path.resolve(path.join(__dirname, 'public'), 'heroku-index.html')
  );
});

const server = app.listen(process.env.PORT || 8080, function () {
  console.log('listening on port ', server.address().port);
});
