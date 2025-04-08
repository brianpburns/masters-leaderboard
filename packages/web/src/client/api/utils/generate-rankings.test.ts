import { RawGolferData } from 'src/types';
import { unprocessedLeaderboardGolfer } from 'test/mocks';
import { generateRankings } from './generate-rankings';

const mockData: RawGolferData[] = [unprocessedLeaderboardGolfer];

describe('generateRankings', () => {
  test('generates clean golfer data', () => {
    const { golfers } = generateRankings(mockData);

    expect(Object.keys(golfers)).toHaveLength(1);
    expect(golfers[10423]).toMatchObject({
      id: 10423,
      name: 'Mike Weir',
      position: 0,
      topar: 0,
      thru: '-',
      today: '-',
      teetime: '8:00 AM',
    });
  });

  test('generates rankings', () => {
    const { golferRankings } = generateRankings(mockData);

    expect(golferRankings).toMatchObject({
      '0': { golfers: [10423], prizeMoney: 0 },
    });
  });
});
