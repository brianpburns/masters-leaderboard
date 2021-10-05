import express from 'express';
import * as path from 'path';
import { listTeams, getTeam, updateTeam } from './db/handlers';
require('dotenv').config();

console.log('run');

const app = express();

app.use(express.static(path.join(__dirname, '../../dist')));

app.get('/', (_req, res) => {
  res.sendFile(
    path.resolve(path.join(__dirname, '../../public'), 'heroku.html')
  );
});

app.get('/teams', listTeams());

app.get('/teams/:id', getTeam());

app.post('/teams/:id', updateTeam());

app.listen(process.env.PORT || 8080, function () {
  console.log('listening on port ', process.env.PORT || 8080);
});
