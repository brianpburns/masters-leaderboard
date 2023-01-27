import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { initialGlobalState } from 'src/client/store';
import { renderWithProviders } from 'src/client/__test__/store';
import { Name } from './name';

const mockNameUpdate = jest.fn();

const renderTeamName = (selectionPhase = true) => {
  renderWithProviders(<Name />, {
    preloadedState: { global: { ...initialGlobalState, selectionPhase } },
  });
};

describe('TeamName', () => {
  afterEach(() => jest.resetAllMocks());

  test('renders in non-edit mode by default', () => {
    renderTeamName();

    expect(screen.getByTestId('edit-name-btn')).toBeTruthy();
  });

  test('handles team name update on blur', () => {
    renderTeamName();

    userEvent.click(screen.getByTestId('edit-name-btn'));
    const input = screen.getByLabelText('Team Name');
    fireEvent.change(input, { target: { value: 'new name' } });
    fireEvent.blur(input);

    expect(mockNameUpdate).toBeCalledWith('new name');
    expect(screen.queryByLabelText('Team Name')).toBeFalsy();
  });

  test('handles team name update on pushing enter', () => {
    renderTeamName();

    userEvent.click(screen.getByTestId('edit-name-btn'));
    const input = screen.getByLabelText('Team Name');
    fireEvent.change(input, { target: { value: 'new name' } });
    fireEvent.keyDown(input, { key: 'Enter', keyCode: 13, which: 13 });

    expect(mockNameUpdate).toBeCalledWith('new name');
  });

  test(`doesn't show edit icon when selection mode is false`, () => {
    renderTeamName(false);

    expect(screen.queryByTestId('edit-name-btn')).toBeFalsy();
  });
});
