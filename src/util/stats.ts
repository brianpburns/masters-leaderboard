import { LeaderboardData } from '../types';

export function normaliseCutLine(cutLine: LeaderboardData['cutLine']) {
  return cutLine === 'E' || cutLine === '' ? 0 : parseInt(cutLine);
}
