import React from 'react';
import { render } from '@testing-library/react';

import { PrimaryRow } from './primary-row';
import { teams } from '../../mocks/data/teams';

describe('PrimaryRow', () => {
  test('renders', () => {
    render(<PrimaryRow position={1} row={teams[0]} />);
  });

  expect(true).toBe(true);
});
