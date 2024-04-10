import 'dotenv/config';
import express from 'express';
import * as path from 'path';
import { deleteTeam, getConfig, getMastersLeaderboard, getTeam, listTeams, updateTeam } from './handlers';
import { auth } from './middlewares/auth';

const app = express();

app.use(express.static(path.join(__dirname, '../../dist')), express.json());

app.get('/', (_req, res) => {
  res.sendFile(path.resolve(path.join(__dirname, '../../public'), 'heroku.html'));
});

app.get('/api/teams', listTeams());

app.get('/api/team', auth(), getTeam());

app.post('/api/team', auth(), updateTeam());

app.delete('/api/teams/:id', deleteTeam());

app.get('/api/masters-leaderboard', getMastersLeaderboard());

app.get('/api/config', getConfig());

app.get('*', (_req, res) => {
  res.sendFile(path.resolve(path.join(__dirname, '../../public'), 'heroku.html'));
});

app.listen(process.env.PORT || 8090, function () {
  // eslint-disable-next-line no-console
  console.log('listening on port ', process.env.PORT || 8090);
});
