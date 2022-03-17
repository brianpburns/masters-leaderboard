import { rest } from 'msw';
import { TeamType } from 'src/types';

import { mockLeaderboardData } from './data/leaderboard';

const golfers: Record<string, TeamType> = {
  1: {
    id: 1,
    owner: 'burns',
    name: 'burnsing it up',
    golfer_ids: [1226, 21528],
  },
  2: {
    id: 2,
    owner: 'liam',
    name: 'liam it up',
    golfer_ids: [1226],
  },
};

export const handlers = [
  rest.get(
    'https://www.masters.com/en_US/scores/feeds/2021/scores.json',
    (_req, res, ctx) => res(ctx.status(200), ctx.json(mockLeaderboardData))
  ),

  rest.get('/api/teams/:id', (req, res, ctx) => {
    const { id } = req.params;
    const teamData = golfers[id as string];

    return res(ctx.status(200), ctx.json(teamData));
  }),

  rest.post('/api/teams/:id', (req, res, ctx) => {
    const { id } = req.params;
    const newData = req.body;

    if (!(newData instanceof Object)) return res(ctx.status(500));

    golfers[id as string] = { id, ...newData } as TeamType;

    return res(ctx.status(200));
  }),

  rest.get('/api/teams', (_req, res, ctx) => {
    const teams = Object.values(golfers);

    return res(ctx.status(200), ctx.json(teams));
  }),
];
