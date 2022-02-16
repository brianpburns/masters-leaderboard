import React from 'react';
import { render } from '@testing-library/react';

import { PrimaryRow } from './primary-row';
import { teams } from '../../mocks/data/teams';
import { MutableSnapshot, RecoilRoot } from 'recoil';
import { golfersState } from 'src/client/app';
import { setupMockServer } from 'test/mocks';
import { golfersStateData } from 'src/client/mocks/data/golfers-state-data';

setupMockServer();

const renderPrimaryRow = () => {
  const initializeState = ({ set }: MutableSnapshot) => {
    set(golfersState, golfersStateData);
  };

  render(
    <RecoilRoot initializeState={initializeState}>
      <table>
        <tbody>
          <PrimaryRow position={1} row={teams[0]} />
        </tbody>
      </table>
    </RecoilRoot>
  );
};

describe('PrimaryRow', () => {
  test('renders', () => {
    renderPrimaryRow();

    expect(true).toBe(true);
  });
});
