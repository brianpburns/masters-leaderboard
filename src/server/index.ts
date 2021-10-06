import express from 'express';
import * as path from 'path';
import { listTeams, getTeam, updateTeam } from './handlers';

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

app.get('/api/teams/:id', getTeam());

app.post('/api/teams/:id', updateTeam());

app.listen(process.env.PORT || 8080, function () {
  console.log('listening on port ', process.env.PORT || 8080);
});
