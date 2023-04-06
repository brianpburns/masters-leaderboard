import { mockLeaderboardData } from 'src/client/mock-server/data/leaderboard';
import { RawGolferData } from 'src/types';
import { generateRankings } from './generate-rankings';

const mockData: RawGolferData[] = mockLeaderboardData.data.player.slice(3, 6);

describe('generateRankings', () => {
  test('generates clean golfer data', () => {
    const { golfers } = generateRankings(mockData);

    expect(Object.keys(golfers)).toHaveLength(3);
    expect(golfers[30692]).toMatchObject({
      id: 30692,
      name: 'Scott Stallings',
      position: 0,
      topar: 0,
      thru: '-',
      today: '-',
      teetime: '8:12 AM',
    });
  });

  test('generates rankings', () => {
    const { golferRankings } = generateRankings(mockData);

    expect(golferRankings).toMatchObject({
      '0': { golfers: [30692, 57736, 1717], prizeMoney: 0 },
    });
  });
});
