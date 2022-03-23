import { mockLeaderboardData } from 'src/client/mock-server/data/leaderboard';
import { RawGolferData } from 'src/types';
import { generateRankings } from './generate-rankings';

const mockData: RawGolferData[] = mockLeaderboardData.data.player.slice(3, 6);

describe('generateRankings', () => {
  test('generates clean golfer data', () => {
    const { golfers } = generateRankings(mockData);

    expect(Object.keys(golfers)).toHaveLength(3);
    expect(golfers[27644]).toMatchObject({
      id: 27644,
      name: 'Brian Harman',
      position: 4,
      topar: -3,
      thru: 'F',
      today: '-3',
      teetime: '9:00 AM',
    });
  });

  test('generates rankings', () => {
    const { golferRankings } = generateRankings(mockData);

    expect(golferRankings).toMatchObject({
      '4': { golfers: [27644], prizeMoney: 0, topar: -3 },
      '5': { golfers: [47483, 45522], prizeMoney: 0, topar: -2 },
    });
  });
});
