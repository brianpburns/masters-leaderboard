import { rest } from 'msw';

import { mockMastersLeaderboard } from './data/leaderboard';

export const handlers = [
  rest.get(
    'https://www.masters.com/en_US/scores/feeds/2021/scores.json',
    (_req, res, ctx) => res(ctx.status(200), ctx.json(mockMastersLeaderboard))
  ),
];
