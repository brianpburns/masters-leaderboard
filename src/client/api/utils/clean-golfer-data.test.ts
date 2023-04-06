import { mockLeaderboardData } from 'src/client/mock-server/data/leaderboard';
import { cleanGolferData, normalisePosition } from './clean-golfer-data';

describe('normalisePosition', () => {
  test('correctly handles position with T', () => {
    expect(normalisePosition('T10')).toEqual(10);
  });

  test('sets position to 0 if there is no value', () => {
    expect(normalisePosition('')).toEqual(0);
  });
});

describe('cleanGolferData', () => {
  test('extracts correct data', () => {
    const dirtyGolferData = mockLeaderboardData.data.player[0];
    const result = cleanGolferData(dirtyGolferData);

    const expected = {
      id: 10423,
      name: 'Mike Weir',
      position: 0,
      topar: 0,
      thru: '-',
      today: '-',
      teetime: '8:00 AM',
    };

    expect(result).toEqual(expected);
  });
});
