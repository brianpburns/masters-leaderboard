import { rest } from 'msw';
import { Team } from 'src/types';

import { mockLeaderboardData } from './data/leaderboard';

const golfers: Record<string, Team> = {
  1: {
    id: 1,
    owner: 'burns',
    name: 'burnsing it up',
    golfer_ids: [1226],
    google_id: '1',
  },
  2: {
    id: 2,
    owner: 'liam',
    name: 'liam it up',
    golfer_ids: [1226],
    google_id: '2',
  },
};

export const handlers = [
  rest.get(
    'https://www.masters.com/en_US/scores/feeds/2023/scores.json',
    (_req, res, ctx) => res(ctx.status(200), ctx.json(mockLeaderboardData))
  ),

  rest.get('/api/team', (_req, res, ctx) => {
    const teamData = golfers[1];

    return res(ctx.status(200), ctx.json({ team: teamData, new_team: false }));
  }),

  rest.post('/api/team', (req, res, ctx) => {
    const newData = req.body;

    if (!(newData instanceof Object)) return res(ctx.status(500));

    golfers[1] = { id: 1, ...newData } as Team;

    return res(ctx.status(200));
  }),

  rest.get('/api/teams', (_req, res, ctx) => {
    const teams = Object.values(golfers);

    return res(ctx.status(200), ctx.json(teams));
  }),

  rest.delete('/api/teams/:teamId', (_req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
