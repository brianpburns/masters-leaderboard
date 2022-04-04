import { act, renderHook } from '@testing-library/react-hooks';
import { useFilter } from './use-filter';

const rookie = {
  last_name: 'Power ',
  first_name: 'Séamus',
  id: '28252',
  countryName: 'Ireland',
  countryCode: 'IRL',
  Amateur: '',
  First: '1',
  Past: '',
  image: false,
  top10: false,
};
const top10 = {
  last_name: 'McIlroy ',
  first_name: 'Rory',
  id: '28237',
  countryName: 'N. Ireland',
  countryCode: 'NIR',
  Amateur: '',
  First: '',
  Past: '',
  image: true,
  top10: true,
};
const other = {
  last_name: 'Woods ',
  first_name: 'Tiger',
  id: '8793',
  countryName: 'United States',
  countryCode: 'USA',
  Amateur: '',
  First: '',
  Past: '',
  image: true,
  top10: false,
};

const players = [top10, other, rookie];

const testUseFilter = () => renderHook(() => useFilter(players));

describe('useFilter', () => {
  test('returns all golfers by default', () => {
    const { result } = testUseFilter();

    expect(result.current.results).toMatchObject(players);
  });

  test('returns only rookies', () => {
    const { result } = testUseFilter();

    act(() => result.current.setFilter('rookies'));

    expect(result.current.results).toMatchObject([rookie]);
  });

  test('returns only top10', () => {
    const { result } = testUseFilter();

    act(() => result.current.setFilter('top10'));

    expect(result.current.results).toMatchObject([top10]);
  });

  test('returns only other', () => {
    const { result } = testUseFilter();

    act(() => result.current.setFilter('other'));

    expect(result.current.results).toMatchObject([other]);
  });
});
