import { getPrizeMoney } from './prize-money';

const mockRankings = {
  0: {
    golfers: [1717, 27129],
    prizeMoney: 0,
    topar: 0,
  },
  1: {
    golfers: [28237, 33204],
    prizeMoney: 0,
    topar: -2,
  },
  10: {
    golfers: [52215],
    prizeMoney: 0,
    topar: 1,
  },
  70: {
    golfers: [26851],
    prizeMoney: 0,
    topar: 10,
  },
};

describe('getPrizeMoney', () => {
  test('handles players who miss the cut', () => {
    const prizeMoney = getPrizeMoney('0', mockRankings[0].golfers, '1000');

    expect(prizeMoney).toEqual(0);
  });

  test('handles players outside the cut in the first round', () => {
    const prizeMoney = getPrizeMoney('70', mockRankings[70].golfers, '1000');

    expect(prizeMoney).toEqual(0);
  });

  test('handles players outside the cut in the second round', () => {
    const prizeMoney = getPrizeMoney('70', mockRankings[70].golfers, '0100');

    expect(prizeMoney).toEqual(0);
  });

  test('handles players who make the cut but finish outside the top 50', () => {
    const prizeMoney = getPrizeMoney('70', mockRankings[70].golfers, '0010');

    expect(prizeMoney).toEqual(25000);
  });

  test('handles splitting money on a tie', () => {
    const prizeMoney = getPrizeMoney('1', mockRankings[1].golfers, '0010');

    expect(prizeMoney).toEqual(1656000);
  });

  test('handles player alone in position', () => {
    const prizeMoney = getPrizeMoney('10', mockRankings[10].golfers, '0010');

    expect(prizeMoney).toEqual(310500);
  });
});
