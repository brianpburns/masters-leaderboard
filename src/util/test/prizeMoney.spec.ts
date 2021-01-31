import { GolferData } from '../../types/types';
import { playerPrizeMoney } from '../prizeMoney';

const player1: GolferData = {
  id: '0',
  name: 'Rory McIlroy',
  position: '1',
  prizeMoney: 0,
  topar: -5,
  thru: '10',
  today: '-5',
  teetime: '11:00',
};

const player2: GolferData = {
  id: '1',
  name: 'Justin Rose',
  position: '100',
  prizeMoney: 0,
  topar: 5,
  thru: '10',
  today: '+5',
  teetime: '11:00',
};

const playersStats: GolferData[] = [player1, player2];

describe('calculatePrizeMoney', () => {
  test('returns correct data', () => {});
});

describe('playerPrizeMoney', () => {
  test('returns correct data', () => {
    const result = playerPrizeMoney(playersStats, 1);

    expect(result).toEqual([{}]);
  });
});
