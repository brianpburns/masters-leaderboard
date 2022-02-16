import express from 'express';
import * as path from 'path';
import 'dotenv/config';
import { listTeams, getTeam, updateTeam } from './handlers';
import { authCallback } from './handlers/auth-callback';

// eslint-disable-next-line @typescript-eslint/no-var-requires
(require('dotenv') as unknown as { config: () => void }).config();

const app = express();

app.use(express.static(path.join(__dirname, '../../dist')), express.json());

app.get('/', (_req, res) => {
  res.sendFile(
    path.resolve(path.join(__dirname, '../../public'), 'heroku.html')
  );
});

app.get('/api/teams', listTeams());

app.get('/api/team/:id', getTeam());

// TODO: Need to revist this - matches previous route
app.post('/api/teams/:id', updateTeam());

app.get('/google-auth', authCallback());

app.listen(process.env.PORT || 8080, function () {
  console.log('listening on port ', process.env.PORT || 8080);
});
