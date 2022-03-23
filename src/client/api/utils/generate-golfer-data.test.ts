import { setupMockServer } from 'test/mocks';
import { generateGolferData } from './generate-golfer-data';

setupMockServer();

describe('generateGolferData', () => {
  test('generates expected data', async () => {
    const { golfers, golferMoneyRankings, cutLine } =
      await generateGolferData();

    expect(Object.keys(golfers).length).toEqual(88);
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
