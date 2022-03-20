import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TeamName } from './team-name';
import userEvent from '@testing-library/user-event';

const mockNameUpdate = jest.fn();

const renderTeamName = () => {
  render(<TeamName name='test' nameUpdate={mockNameUpdate} />);
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
});
