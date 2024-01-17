import { mockLeaderboardData } from 'src/client/mock-server/data/leaderboard';
import { setupMockServer } from 'test/mocks';
import { processLeaderBoardData } from './generate-golfer-data';

setupMockServer();

describe('processLeaderBoardData', () => {
  test('returns expected data when there is no leaderboard data', () => {
    const { golfers, golferMoneyRankings, cutLine } = processLeaderBoardData(
      0,
      [],
      '1000'
    );

    expect(golfers).toEqual([]);
    expect(golferMoneyRankings).toEqual([]);
    expect(cutLine).toEqual(0);
  });

  test('generates expected data when full leaderboard provided', async () => {
    const { golfers, golferMoneyRankings, cutLine } = processLeaderBoardData(
      0,
      mockLeaderboardData.data.player,
      '1000'
    );

    expect(Object.keys(golfers).length).toEqual(88);
    expect(golfers).toMatchObject({
      '1226': {
        id: 1226,
        name: 'Fred Couples',
        position: 0,
        topar: 0,
        thru: '-',
        today: '-',
        teetime: '8:36 AM',
      },
    });
    expect(golferMoneyRankings).toMatchObject({
      '0': { golfers: expect.any(Array), prizeMoney: 10000, topar: 0 },
    });
    expect(cutLine).toEqual(0);
  });
});
