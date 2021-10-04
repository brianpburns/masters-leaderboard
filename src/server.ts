import * as express from 'express';
import * as path from 'path';
import { listTeams, getTeam } from './db/handlers';
import { updateTeam } from './db/handlers/update-team';

const app = express();

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', (_req, res) => {
  res.sendFile(path.resolve(path.join(__dirname, '../public'), 'heroku.html'));
});

app.get('/teams', listTeams());

app.get('/teams/:id', getTeam());

app.post('/teams/:id', updateTeam());

app.listen(process.env.PORT || 8080, function () {
  console.log('listening on port ', process.env.PORT || 8080);
});

export const test = () => {};
