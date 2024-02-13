import { normaliseCutLine } from './normalise-cut-line';

describe('normaliseCutLine', () => {
  test('handles E', () => {
    expect(normaliseCutLine('E')).toEqual(0);
  });

  test('handles empty string', () => {
    expect(normaliseCutLine('')).toEqual(0);
  });

  test('handles positive number', () => {
    expect(normaliseCutLine('2')).toEqual(2);
  });

  test('handles negative number', () => {
    expect(normaliseCutLine('-2')).toEqual(-2);
  });
});
