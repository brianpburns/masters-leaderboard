import { reduxHookTestWrapper } from 'src/client/__test__';
import { useGetGolferData } from './use-get-golfer-data';

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
  first_masters: true,
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
  first_masters: false,
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
  first_masters: false,
};

const players = [rookie, top10, other];

const testUseGetGolferData = () =>
  reduxHookTestWrapper(() => useGetGolferData());

describe('useGetGolferData', () => {
  test('sorts results correctly', () => {
    const { result } = testUseGetGolferData();

    const sortedResults = result.current.sortResults(players);

    expect(sortedResults[0]).toEqual(top10);
    expect(sortedResults[1]).toEqual(other);
    expect(sortedResults[2]).toEqual(rookie);
  });
});
