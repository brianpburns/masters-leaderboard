import '@testing-library/jest-dom';

// Required to add `fetch` to the JSDOM test environment
import 'whatwg-fetch';

import 'dotenv/config';

jest.mock('src/client/data/golfers-data', () => ({
  ...jest.requireActual('src/client/data/golfers-data'),
  golfersData: {
    players: [
      {
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
      },
      {
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
      },
      {
        last_name: 'Shepherd ',
        first_name: 'Laird',
        id: '60371',
        countryName: 'England',
        countryCode: 'ENG',
        Amateur: '1',
        First: '1',
        Past: '',
        image: false,
        top10: false,
      },
      {
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
      },
    ],
  },
}));
