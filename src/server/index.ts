import express from 'express';
import * as path from 'path';
import 'dotenv/config';
import {
  listTeams,
  getTeam,
  updateTeam,
  authCallback,
  deleteTeam,
} from './handlers';

const app = express();

app.use(express.static(path.join(__dirname, '../../dist')), express.json());

app.get('/', (_req, res) => {
  res.sendFile(
    path.resolve(path.join(__dirname, '../../public'), 'heroku.html')
  );
});

app.get('/api/teams', listTeams());

app.get('/api/teams/:id', getTeam());

app.post('/api/teams/:id', updateTeam());

app.delete('/api/teams/:id', deleteTeam());

app.get('/google-auth', authCallback());

app.get('*', (_req, res) => {
  res.sendFile(
    path.resolve(path.join(__dirname, '../../public'), 'heroku.html')
  );
});

app.listen(process.env.PORT || 8080, function () {
  console.log('listening on port ', process.env.PORT || 8080);
});
