import React from 'react';
import { render } from '@testing-library/react';

import { PrimaryRow } from './primary-row';
import { entrants } from '../../mocks/data/teams';

describe('PrimaryRow', () => {
  test('renders', () => {
    render(<PrimaryRow position={1} row={entrants[0]} />);
  });

  expect(true).toBe(true);
});
