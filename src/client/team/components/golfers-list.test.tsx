import React from 'react';
import { render, screen } from '@testing-library/react';
import { MutableSnapshot, RecoilRoot } from 'recoil';

import { GolfersList } from './golfers-list';
import { golfersState } from '../../app';
import userEvent from '@testing-library/user-event';

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
  1: {
    id: 0,
    name: 'Fred Couples',
    position: 50,
    prizeMoney: 0,
    topar: 12,
    thru: '12',
    today: '12',
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
    userEvent.click(screen.getAllByTestId('add-golfer')[0]);

    expect(screen.queryByText('Tiger Woods')).toBeFalsy();
  });

  test('filters list of golfers based on searchTerm', () => {
    renderGolfersList();

    expect(screen.getByText('Fred Couples')).toBeTruthy();

    const searchBarInput = screen.getByTestId('search-bar-input');
    userEvent.click(searchBarInput);
    userEvent.type(searchBarInput, 'Tiger');

    expect(screen.getByText('Tiger Woods')).toBeTruthy();
    expect(screen.queryByText('Fred Couples')).toBeFalsy();
  });
});
