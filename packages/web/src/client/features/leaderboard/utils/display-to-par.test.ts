import { displayToPar } from './display-to-par';

describe('displayToPar', () => {
  test('returns E for 0', () => {
    expect(displayToPar(0)).toEqual('E');
  });

  test('returns number prefixed with plus when greater than 0', () => {
    expect(displayToPar(1)).toEqual('+1');
  });

  test('returns number as string when less than 0', () => {
    expect(displayToPar(-1)).toEqual('-1');
  });
});
