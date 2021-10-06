import { rest } from 'msw';

import { mockMastersLeaderboard } from './data/leaderboard';

export const handlers = [
  rest.get('/scores.json', (_req, res, ctx) =>
    res(ctx.status(200), ctx.json(mockMastersLeaderboard))
  ),

  rest.get('/api/teams/:id', (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 1,
        owner: 'burns',
        name: 'burnsing it up',
        golfer_ids: [1226],
      })
    );
  }),

  rest.post('/api/teams/:id', (_req, res, ctx) => {
    return res(ctx.status(200));
  }),

  rest.get('/api/teams', (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          owner: 'burns',
          name: 'burnsing it up',
          golfer_ids: [1226],
        },
        {
          id: 2,
          owner: 'liam',
          name: 'liam it up',
          golfer_ids: [1226],
        },
      ])
    );
  }),
];
