import { screen } from '@testing-library/react';
import React from 'react';
import { renderWithProviders } from 'src/client/__test__/store';
import { initialState } from '../state/alert-slice';
import { AlertContainer } from './alert-container';

const renderAlert = () =>
  renderWithProviders(<AlertContainer />, {
    preloadedState: {
      alert: {
        ...initialState,
        open: true,
        message: 'test',
        severity: 'info',
      },
    },
  });

describe('AlertContainer', () => {
  test('renders alert', () => {
    renderAlert();

    expect(screen.getByTestId('InfoOutlinedIcon')).toBeTruthy();
    expect(screen.getByText('test')).toBeTruthy();
  });
});
