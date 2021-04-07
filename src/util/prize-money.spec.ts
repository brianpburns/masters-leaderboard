import { GolferData } from '../ui/types';
import { playerPrizeMoney } from './prize-money';

const player1: GolferData = {
  id: '0',
  name: 'Rory McIlroy',
  position: 1,
  prizeMoney: 0,
  topar: -5,
  thru: '10',
  today: '-5',
  teetime: '11:00',
};

const player2: GolferData = {
  id: '1',
  name: 'Justin Rose',
  position: 100,
  prizeMoney: 0,
  topar: 5,
  thru: '10',
  today: '+5',
  teetime: '11:00',
};

const playersStats: GolferData[] = [player1, player2];

describe('calculatePrizeMoney', () => {
  test.todo('returns correct data');
});

describe('playerPrizeMoney', () => {
  test.skip('returns correct data', () => {
    const result = playerPrizeMoney(playersStats, 1);

    expect(result).toEqual([{}]);
  });
});
