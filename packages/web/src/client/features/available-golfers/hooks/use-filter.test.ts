import { act, renderHook } from '@testing-library/react-hooks';
import { generalFieldGolfer, rookieGolfer, top10Golfer } from 'test/mocks';
import { useFilter } from './use-filter';

const mockGolfers = [top10Golfer, generalFieldGolfer, rookieGolfer];

const testUseFilter = () => renderHook(() => useFilter(mockGolfers, ''));

describe('useFilter', () => {
  test('returns all golfers by default', () => {
    const { result } = testUseFilter();

    expect(result.current.results).toMatchObject(mockGolfers);
  });

  test('returns only rookies', () => {
    const { result } = testUseFilter();

    act(() => result.current.setFilter('rookies'));

    expect(result.current.results).toMatchObject([rookieGolfer]);
  });

  test('returns only top10', () => {
    const { result } = testUseFilter();

    act(() => result.current.setFilter('top10'));

    expect(result.current.results).toMatchObject([top10Golfer]);
  });

  test('returns only other', () => {
    const { result } = testUseFilter();

    act(() => result.current.setFilter('other'));

    expect(result.current.results).toMatchObject([generalFieldGolfer]);
  });
});
