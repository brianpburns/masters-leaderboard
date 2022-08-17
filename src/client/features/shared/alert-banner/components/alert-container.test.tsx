import React from 'react';
import { render, screen } from '@testing-library/react';
import { MutableSnapshot, RecoilRoot } from 'recoil';
import { AlertContainer } from './alert-container';
import { alertState } from '../state/selectors';
import { Alert } from '../types';

const renderAlert = () => {
  const initializeState = ({ set }: MutableSnapshot) => {
    set(alertState, { open: true, message: 'test', severity: 'info' } as Alert);
  };
  return render(
    <RecoilRoot initializeState={initializeState}>
      <AlertContainer />
    </RecoilRoot>
  );
};

describe('AlertContainer', () => {
  test('renders alert', () => {
    renderAlert();

    expect(screen.getByTestId('InfoOutlinedIcon')).toBeTruthy();
    expect(screen.getByText('test')).toBeTruthy();
  });
});
