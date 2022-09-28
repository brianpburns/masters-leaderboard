import 'dotenv/config';
import express from 'express';
import functions from 'firebase-functions';
import * as path from 'path';
// import { deleteTeam, getTeam, listTeams, updateTeam } from './handlers';
// import { auth } from './middlewares/auth';

const app = express();

app.use(express.static(path.join(__dirname, '../../dist')), express.json());

app.get('/', (_req, res) => {
  res.sendFile(
    path.resolve(path.join(__dirname, '../../public'), 'heroku.html')
  );
});

// app.get('/api/teams', listTeams());

// app.get('/api/team', auth(), getTeam());

// app.post('/api/team', auth(), updateTeam());

// app.delete('/api/teams/:id', deleteTeam());

// app.get('*', (_req, res) => {
//   res.sendFile(
//     path.resolve(path.join(__dirname, '../../public'), 'heroku.html')
//   );
// });

// app.listen(process.env.PORT || 8080, function () {
//   // eslint-disable-next-line no-console
//   console.log('listening on port ', process.env.PORT || 8080);
// });

export const test = functions.https.onRequest(app);
