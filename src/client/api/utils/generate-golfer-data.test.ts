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

    expect(golfers).toBeNull();
    expect(golferMoneyRankings).toBeNull();
    expect(cutLine).toEqual(0);
  });

  test('generates expected data when full leaderboard provided', async () => {
    const { golfers, golferMoneyRankings, cutLine } = processLeaderBoardData(
      0,
      mockLeaderboardData.data.player,
      '1000'
    );

    expect(golfers && Object.keys(golfers).length).toEqual(88);
    expect(golfers).toMatchObject({
      '1226': {
        id: 1226,
        name: 'Fred Couples',
        position: 72,
        topar: 4,
        thru: '7',
        today: '+4',
        teetime: '12:24 PM',
      },
    });
    expect(golferMoneyRankings).toMatchObject({
      '1': { golfers: [32839, 29221, 26851], prizeMoney: 1364667, topar: -4 },
    });
    expect(cutLine).toEqual(0);
  });
});
