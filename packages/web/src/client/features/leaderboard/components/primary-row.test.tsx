import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { setupMockServer, teams } from 'test/mocks';
import { PrimaryRow } from './primary-row';

setupMockServer();

const mockSetOpen = jest.fn();

const renderPrimaryRow = (open = true) => {
  render(
    <table>
      <tbody>
        <PrimaryRow open={open} setOpen={mockSetOpen} position={1} row={teams[0]} selectionPhase={false} />
      </tbody>
    </table>,
  );
};

describe('PrimaryRow', () => {
  test('renders correctly when closed', () => {
    renderPrimaryRow(false);

    expect(screen.getByTestId('toggle-down')).toBeTruthy();
  });

  test('renders correctly when open', () => {
    renderPrimaryRow();

    expect(screen.getByTestId('toggle-up')).toBeTruthy();
  });

  test('calls setOpen on click', () => {
    renderPrimaryRow();

    userEvent.click(screen.getByText('Logan'));

    expect(mockSetOpen).toBeCalledWith(false);
  });
});
