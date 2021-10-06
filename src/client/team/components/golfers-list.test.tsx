import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MutableSnapshot, RecoilRoot } from 'recoil';

import { GolfersList } from './golfers-list';
import { golfersState } from '../../app';

const golfers = {
  0: {
    id: 0,
    name: 'Tiger Woods',
    position: 10,
    prizeMoney: 0,
    topar: 2,
    thru: '2',
    today: '2',
    teetime: '',
  },
};

const renderGolfersList = () => {
  const initializeState = ({ set }: MutableSnapshot) => {
    set(golfersState, golfers);
  };

  render(
    <RecoilRoot {...{ initializeState }}>
      <GolfersList />
    </RecoilRoot>
  );
};

describe('Golfers List', () => {
  test('renders correctly', () => {
    renderGolfersList();

    expect(screen.getByText('Tiger Woods')).toBeTruthy();
  });

  test('removes a selected golfer from the list', () => {
    renderGolfersList();
    fireEvent.click(screen.getByTestId('add-golfer'));

    expect(screen.queryByText('Tiger Woods')).toBeFalsy();
  });
});
