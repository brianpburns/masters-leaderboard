import { setupMockServer, unprocessedLeaderboardGolfer } from 'test/mocks';
import { processLeaderBoardData } from './generate-golfer-data';

setupMockServer();

describe(processLeaderBoardData, () => {
  test('returns expected data when there is no leaderboard data', () => {
    const { golfers, golferMoneyRankings, cutLine } = processLeaderBoardData(0, [], '1000');

    expect(golfers).toEqual([]);
    expect(golferMoneyRankings).toEqual([]);
    expect(cutLine).toEqual(0);
  });

  test('generates expected data when full leaderboard provided', async () => {
    const { golfers, golferMoneyRankings, cutLine } = processLeaderBoardData(0, [unprocessedLeaderboardGolfer], '1000');

    expect(Object.keys(golfers).length).toEqual(1);
    expect(golfers).toMatchObject({
      '10423': {
        id: 10423,
        name: 'Mike Weir',
        position: 0,
        topar: 0,
        thru: '-',
        today: '-',
        teetime: '8:00 AM',
      },
    });
    expect(golferMoneyRankings).toMatchObject({
      '0': { golfers: expect.any(Array), prizeMoney: 0, topar: 0 },
    });
    expect(cutLine).toEqual(0);
  });
});
