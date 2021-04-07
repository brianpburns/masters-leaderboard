import React from 'react';
import { render } from '@testing-library/react';

import { Row } from './row-temp';
import { initialState } from './main-leaderboard';

describe('Row', () => {
  test('renders', () => {
    render(<Row position={1} row={initialState[0]} />);
  });

  expect(true).toBe(true);
});
