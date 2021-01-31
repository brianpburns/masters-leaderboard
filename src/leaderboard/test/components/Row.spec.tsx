import React from 'react';
import { render } from '@testing-library/react';

import { Row } from '../../components/Row';
import { initialState } from '../../components/MainLeaderboard';

describe('Row', () => {
  test('renders', () => {
    render(<Row position={1} row={initialState[0]} />);
  });

  expect(true).toBe(true);
});
